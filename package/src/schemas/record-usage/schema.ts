import z from "zod";
import { BLOCK_SCHEMA } from "../common/blockSchema";
import {  onNoUsageStore } from "../common/onNoUsageStore";
import { usageStoreIdSchema } from "../common/usageStoreId";
import { usageRecordSchema } from "../common/usageRecordSchema";
import { SAMPLING_SCHEMA } from "../common/samplingSchema";

export default z.object({
    usageRecords: z.array(usageRecordSchema)
      .max(10, 'Maximum of 10 usageGroupings key-value pairs allowed')
      .describe('An array of up to 10 usage records.'),
    usageStoreId: usageStoreIdSchema,
    ...BLOCK_SCHEMA,
    ...SAMPLING_SCHEMA,
    
    onNoUsageStore: onNoUsageStore.optional(),
  });