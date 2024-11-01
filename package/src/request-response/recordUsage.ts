import { onNoUsageStore } from "./common/onNoUsageStore";
import { RecordingUsageResponsesCommon } from "./common/recordUsageResponse";
import { ResponseWrapper } from "./common/responseWrapper";
import { usageRecordSchema } from "./common/usageRecordSchema";
import { usageStoreIdSchema } from "./common/usageStoreId";
import { z } from "zod";


export const recordUsageSchema = z.object({
  usageRecords: z.array(usageRecordSchema)
    .max(10, 'Maximum of 10 usageGroupings key-value pairs allowed'),
  usageStoreId: usageStoreIdSchema,
  useRateLimit: z.boolean(),
  useBlock: z.boolean(),
  
  onNoUsageStore: z.optional(onNoUsageStore),
});

export type RecordUsageRequest = z.infer<typeof recordUsageSchema>;

export type RecordUsageResponse = ResponseWrapper<RecordingUsageResponsesCommon>
