import { z } from "zod";

export const usageRecordSchema = z .object({
    key: z.string()
      .regex(/^[a-zA-Z0-9_-]+$/, 'usageRecords key must only contain alphanumeric characters, underscores, and hyphens')
      .min(1, 'usageRecords key must be at least 1 character long')
      .max(100, 'usageRecords key must be at most 100 characters long'),
    value: z.number().positive('usageRecords value must be positive'),
  });