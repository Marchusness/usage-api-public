import z from "zod";
import { usageStoreIdSchema } from "../common/usageStoreId";

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

export default z.object({
    usageStoreId: usageStoreIdSchema,
    dateSelection: z.union([
      z.object({
        startDate: isoDateString
        .describe('The start date of the usage data to retrieve (inclusive). Must be in ISO 8601 format. This value will be rounded down to the nearest hour.'),
        endDate: isoDateString
        .describe('The end date of the usage data to retrieve (inclusive). Must be in ISO 8601 format. This value will be rounded down to the nearest hour.'),
      })
      .refine((data) => {
        const start = getStartOfHour(new Date(data.startDate));
        const end = getStartOfHour(new Date(data.endDate));
        const hoursDifference = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        return hoursDifference <= MAX_HOURS;
      }, {
        message: "The difference between startDate and endDate cannot exceed 7 days",
      })
      .describe('Retrieve usage data for a specific date range. The difference between startDate and endDate cannot exceed 7 days.'),
      z.object({
        singleHour: isoDateString
        .describe('The date of the usage data to retrieve. Must be in ISO 8601 format. This value will be rounded down to the nearest hour.'),
      })
      .describe('Retrieve usage data for a single hour.'),        
      z.object({
        pastHours: z.number()
          .int("Past hours must be a whole number")
          .min(1, "Cannot request less than 1 hour of usage data")
          .max(168, "Cannot request more than 7 days of usage data")
          .describe('Must be a whole number between 1 and 168.'),
      })
      .describe('Retrieve usage data for the past number of hours.'),
    ])
    .describe('The date range to retrieve usage data.'),
  });