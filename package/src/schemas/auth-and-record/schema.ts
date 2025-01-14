import z from "zod";
import { BLOCK_SCHEMA } from "../common/blockSchema";
import { usageRecordSchema } from "../common/usageRecordSchema";
import { SAMPLING_SCHEMA } from "../common/samplingSchema";

export default z.object({
    usageRecords: z.array(usageRecordSchema)
      .max(10, 'Maximum of 10 usage records key-value pairs allowed')
      .describe('An array of up to 10 usage records.'),
    ...BLOCK_SCHEMA,
    ...SAMPLING_SCHEMA,
  });