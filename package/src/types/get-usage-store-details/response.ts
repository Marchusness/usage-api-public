import { ResponseWrapper } from "../common/responseWrapper";
import { UsageStoreDetails } from "../common/usageStoreDetails";

export type GetUsageStoreDetailsResponse = ResponseWrapper<{
    success: {
        usageStoreDetails: UsageStoreDetails;
    };
    usageStoreNotFound: {};
}>;
  