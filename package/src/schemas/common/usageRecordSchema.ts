import { z } from "zod";

export const usageRecordSchema = z .object({
    key: z.string()
      .regex(/^[a-zA-Z0-9_\-:]+$/, 'usageRecords key must only contain alphanumeric characters, underscores, hyphens, and colons')
      .min(1, 'usageRecords key must be at least 1 character long')
      .max(30, 'usageRecords key can be at most 30 characters long')
      .describe('A string key that uniquely identifies the usage record. Must only contain alphanumeric characters, underscores, hyphens, and colons. Must be from 1 to 30 characters long.'),
    value: z.number()
      .describe('Any floating or integer value.'),
  })
  .describe('A usage record is aggregated by summing the values of all records with the same key.');