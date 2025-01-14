import { ResponseWrapper } from "../common/responseWrapper";

export type CreateKeyResponse = ResponseWrapper<{
    success: {
      apiKey: string;
      apiKeyId: string;
    };
    rateLimited: {
      message: string;
    };
    usageStoreNotFound: {};
  }>;
  