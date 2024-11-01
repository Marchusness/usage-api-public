import z from "zod";
import { rateLimitSchema } from "./rateLimitSchema";

export const onNoUsageStore = z.union([
    z.object({
      type: z.literal('create'),
      rateLimits: z.optional(z.array(rateLimitSchema)
        .min(1, 'Minimum of 1 rate limit allowed')
        .max(3, 'Maximum of 3 rate limits allowed')),
    }),
    z.object({
      type: z.literal('block'),
    }),
  ])