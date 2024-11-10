import { z } from "zod";
import { ResponseWrapper } from "./common/responseWrapper";
import { usageStoreIdSchema } from "./common/usageStoreId";
import { UsageDoc } from "./common/usageDoc";

const MAX_HOURS = 7 * 24; // 7 days in hours

export function getStartOfHour(date: Date): Date {
  const newDate = new Date(date);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
}

const isoDateString = z.string().refine((val) => {
  const date = new Date(val);
  return !isNaN(date.getTime()) && val === date.toISOString();
}, {
  message: "All dates must be valid ISO 8601 format",
});

export const getUsageSchema = z.object({
  usageStoreId: usageStoreIdSchema,
  dateSelection: z.union([
    z.object({
      startDate: isoDateString,
      endDate: isoDateString,
    })
    .refine((data) => {
      const start = getStartOfHour(new Date(data.startDate));
      const end = getStartOfHour(new Date(data.endDate));
      const hoursDifference = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
      return hoursDifference <= MAX_HOURS;
    }, {
      message: "The difference between startDate and endDate cannot exceed 14 days",
    }),
    z.object({
      singleHour: isoDateString,
    }),        
    z.object({
      pastHours: z.number()
        .int("Past hours must be a whole number")
        .min(1, "Cannot request less than 1 hour of usage data")
        .max(168, "Cannot request more than 7 days of usage data"),
    }),
  ])
});

export type GetUsageRequest = z.infer<typeof getUsageSchema>;

export type GetUsageResponse = ResponseWrapper<{
  success: {
    usage: UsageDoc[]
  };
  usageStoreNotFound: {};
  invalidDateRange: {
    message: string;
  };
  rateLimited: {
    message: string;
  };
}>;
