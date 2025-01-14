import z from "zod";
import { usageStoreIdSchema } from "../common/usageStoreId";

export default z.object({
    usageStoreId: usageStoreIdSchema,
    blockAfterTimestamp: z.number().optional()
    .describe('The timestamp after which requests will be blocked. Must be in milliseconds since the Unix epoch (January 1, 1970 00:00:00 UTC).'),
    samplingConfig: z.object({
        keys: z.array(
            z.string()
            .regex(/^[a-zA-Z0-9_\-:]+$/, 'samplingConfig keys must only contain alphanumeric characters, underscores, hyphens, and colons')
            .min(1, 'samplingConfig keys must be at least 1 character long')
            .max(10, 'samplingConfig keys can be at most 10 characters long')
        )
        .min(1, 'samplingConfig keys must have at least 1 key')
        .max(20, 'samplingConfig keys can have at most 20 keys')
        .describe('The keys to sample based on. These keys must match the keys in the usageRecords array when recording usage. The keys must be from 1 to 10 characters long. There must be at least 1 key and at most 20 keys.'),
        accuracy: z.object({
            confidencePercent: z.number().describe('The confidence percent.'),
            errorMarginPercent: z.number().describe('The error margin percent.'),
            periodSeconds: z.number().describe('The period seconds.'),
        }).describe("The accuracy of the sampling. Over 'periodSeconds' seconds, there will be a 'confidencePercent' confidence that the predicted usage will be within 'errorMarginPercent' of the actual usage."),
    }).optional(),
});