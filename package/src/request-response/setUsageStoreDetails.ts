
import { rateLimitSchema } from "./common/rateLimitSchema";
import { ResponseWrapper } from "./common/responseWrapper";
import { usageStoreIdSchema } from "./common/usageStoreId";
import { z } from "zod";

export const setUsageStoreDetailsSchema = z.object({
  usageStoreId: usageStoreIdSchema,
  rateLimits: z.optional(
    z.array(rateLimitSchema)
      .min(1, 'Minimum of 1 rate limit allowed')
      .max(3, 'Maximum of 3 rate limits allowed')
  ),
  blocked: z.optional(z.boolean()),
});


export type SetUsageStoreDetailsRequest = z.infer<typeof setUsageStoreDetailsSchema>;

export type SetUsageStoreDetailsResponse = ResponseWrapper<object>
