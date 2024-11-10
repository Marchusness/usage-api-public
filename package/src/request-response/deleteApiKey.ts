
import { z } from "zod";
import { ResponseWrapper } from "./common/responseWrapper";
import { usageStoreIdSchema } from "./common/usageStoreId";

export const deleteKeySchema = z.object({
  usageStoreId: usageStoreIdSchema,
  apiKeyId: z.string(),
});

export type DeleteKeyRequest = z.infer<typeof deleteKeySchema>;

export type DeleteKeyResponse = ResponseWrapper<{
  success: {};
  usageStoreNotFound: {};
  apiKeyNotFound: {};
  rateLimited: {
    message: string;
  };
}>
