import { ResponseWrapper } from "../common/responseWrapper";
import { UsageDoc } from "../common/usageDoc";

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
  