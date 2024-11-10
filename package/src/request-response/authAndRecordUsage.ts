import { z } from "zod";
import { usageRecordSchema } from "./common/usageRecordSchema";
import { ResponseWrapper } from "./common/responseWrapper";
import { RecordingUsageResponsesCommon } from "./common/recordUsageResponse";
import { RATE_LIMIT_BLOCK_SCHEMA } from "./common/rateLimitBlock";

export const authAndRecordUsageSchema = z.object({
  usageRecords: z.array(usageRecordSchema)
    .max(10, 'Maximum of 10 usageGroupings key-value pairs allowed'),
    ...RATE_LIMIT_BLOCK_SCHEMA,
});

export type AuthAndRecordUsageRequest = z.infer<typeof authAndRecordUsageSchema>;

export type AuthAndRecordUsageResponse = ResponseWrapper<RecordingUsageResponsesCommon & {
  unauthorized: {};
}>;
