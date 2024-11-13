
import { z } from 'zod';

export const rateLimitSchema = z.object({
    rateLimitId: z.string()
      .regex(/^[a-zA-Z0-9_-]+$/, 'rateLimitId must only contain alphanumeric characters, underscores, and hyphens')
      .min(1, 'rateLimitId must be at least 1 character long')
      .max(100, 'rateLimitId must be at most 100 characters long'),
    maxCapacity: z.number().int().positive("limit must be positive"),
    refillCapacity: z.number().int().positive("refillCapacity must be positive"),
    refillTimeSeconds: z.number().int().positive("timeWindowSeconds must be positive"),
  });
  