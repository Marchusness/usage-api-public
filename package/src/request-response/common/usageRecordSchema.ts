import { z } from "zod";

export const usageRecordSchema = z .object({
    key: z.string()
      .regex(/^[a-zA-Z0-9_\-:]+$/, 'usageRecords key must only contain alphanumeric characters, underscores, hyphens, and colons')
      .min(1, 'usageRecords key must be at least 1 character long')
      .max(50, 'usageRecords key can be at most 50 characters long'),
    value: z.number().positive('usageRecords value must be positive'),
  });