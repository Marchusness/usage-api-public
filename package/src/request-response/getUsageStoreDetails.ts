import { z } from "zod";
import { ResponseWrapper } from "./common/responseWrapper";
import { usageStoreIdSchema } from "./common/usageStoreId";
import { UsageStoreDetails } from "./common/usageStoreDetails";
import { onNoUsageStore } from "./common/onNoUsageStore";

export const getUsageStoreDetailsSchema = z.object({
  usageStoreId: usageStoreIdSchema,
  onNoUsageStore: z.optional(onNoUsageStore),
});

export type GetUsageStoreDetailsRequest = z.infer<typeof getUsageStoreDetailsSchema>;

export type GetUsageStoreDetailsResponse = ResponseWrapper<{
  success: UsageStoreDetails;
  usageStoreNotFound: {};
}>;
