import z from "zod";

export const blockAfterTimestampSchema = z.number()
.describe('The timestamp after which requests will be blocked. Timestamp is in seconds since the Unix epoch. If the timestamp is in the past, requests will be blocked immediately.');

export const BLOCK_SCHEMA = {
    blockBehavior: z.enum(["ignore", "block"])
        .default("block")
        .optional()
        .describe("Controls whether to block requests based on the 'blockAfterTimestamp' field in the usage store. If 'ignore', requests will proceed regardless of blockAfterTimestamp. If 'block', requests will be blocked if their timestamp is after blockAfterTimestamp in the usage store."),
}
