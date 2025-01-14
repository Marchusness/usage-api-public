import z from "zod";
import { usageStoreIdSchema } from "../common/usageStoreId";

export default z.object({
    usageStoreId: usageStoreIdSchema,
    apiKeyId: z.string()
    .max(1000, 'invalid apiKeyId.')
    .describe('The ID of the API key to delete. This value is returned from the get-usage-store-details endpoint or when the API key is created'),
  });