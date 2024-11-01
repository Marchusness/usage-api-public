import { z } from "zod";
import { usageRecordSchema } from "./common/usageRecordSchema";
import { ResponseWrapper } from "./common/responseWrapper";
import { RecordingUsageResponsesCommon } from "./common/recordUsageResponse";

export const authAndRecordUsageSchema = z.object({
  usageRecords: z.array(usageRecordSchema)
    .max(10, 'Maximum of 10 usageGroupings key-value pairs allowed'),
  useRateLimit: z.boolean(),
  useBlock: z.boolean(),
});

export type AuthAndRecordUsageRequest = z.infer<typeof authAndRecordUsageSchema>;

export type AuthAndRecordUsageResponse = ResponseWrapper<RecordingUsageResponsesCommon>;
