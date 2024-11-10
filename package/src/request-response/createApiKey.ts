import { onNoUsageStore } from "./common/onNoUsageStore";
import { rateLimitSchema } from "./common/rateLimitSchema";
import { ResponseWrapper } from "./common/responseWrapper";
import { usageStoreIdSchema } from "./common/usageStoreId";
import { z } from "zod";

export const createKeySchema = z.object({
  usageStoreId: usageStoreIdSchema,
  keyName: z.string()
    .regex(/^[a-zA-Z0-9_-]+$/, 'keyName must only contain alphanumeric characters, underscores, and hyphens')
    .min(1, 'keyName must be at least 1 character long')
    .max(100, 'keyName must be at most 100 characters long'),

  onNoUsageStore: z.optional(onNoUsageStore),
});

export type CreateKeyRequest = z.infer<typeof createKeySchema>;

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
