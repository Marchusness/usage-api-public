import {z} from "zod";

export const usageStoreIdSchema = z.string()
  .regex(/^[a-zA-Z0-9_-]+$/, 'usageStoreId must only contain alphanumeric characters, underscores, and hyphens')
  .min(1, 'usageStoreId must be at least 1 character long')
  .max(100, 'usageStoreId must be at most 100 characters long')
  .describe('A string that uniquely identifies the usage store. This is commonly a user ID or a project ID. Must only contain alphanumeric characters, underscores, and hyphens. Must be from 1 to 100 characters long.');