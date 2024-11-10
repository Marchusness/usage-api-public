import { z } from "zod";
import { ResponseWrapper } from "./common/responseWrapper";
import { usageStoreIdSchema } from "./common/usageStoreId";
import { UsageStoreDetails } from "./common/usageStoreDetails";

export const getUsageStoreDetailsSchema = z.object({
  usageStoreId: usageStoreIdSchema,
});

export type GetUsageStoreDetailsRequest = z.infer<typeof getUsageStoreDetailsSchema>;

export type GetUsageStoreDetailsResponse = ResponseWrapper<{
  success: UsageStoreDetails;
  usageStoreNotFound: {};
}>;
