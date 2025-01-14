import { ResponseWrapper } from "../common/responseWrapper";

export type SetUsageStoreDetailsResponse = ResponseWrapper<{
    success: {};
    rateLimited: {
      message: string;
    };
  }>
  