import { ResponseWrapper } from "../common/responseWrapper";

export type DeleteKeyResponse = ResponseWrapper<{
    success: {};
    usageStoreNotFound: {};
    apiKeyNotFound: {};
    rateLimited: {
      message: string;
    };
  }>
  