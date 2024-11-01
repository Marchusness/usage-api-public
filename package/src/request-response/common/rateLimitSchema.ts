
import { z } from 'zod';

export const rateLimitSchema = z.object({
    rateLimitId: z.string()
      .regex(/^[a-zA-Z0-9_-]+$/, 'rateLimitId must only contain alphanumeric characters, underscores, and hyphens')
      .min(1, 'rateLimitId must be at least 1 character long')
      .max(100, 'rateLimitId must be at most 100 characters long'),
    limit: z.number().int().positive("limit must be positive"),
    timeWindowSeconds: z.number().int().positive("timeWindowSeconds must be positive"),
  });
  