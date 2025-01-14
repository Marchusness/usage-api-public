import z from "zod";
import { usageStoreIdSchema } from "../common/usageStoreId";
import { onNoUsageStore } from "../common/onNoUsageStore";

export default z.object({
    usageStoreId: usageStoreIdSchema,
    keyName: z.string()
      .regex(/^[a-zA-Z0-9_-]+$/, 'keyName must only contain alphanumeric characters, underscores, and hyphens')
      .min(1, 'keyName must be at least 1 character long')
      .max(50, 'keyName must be at most 50 characters long')
      .describe('A string that uniquely identifies the API key. Must only contain alphanumeric characters, underscores, and hyphens. Must be from 1 to 50 characters long.'),
  
    onNoUsageStore: onNoUsageStore.optional(),
  });