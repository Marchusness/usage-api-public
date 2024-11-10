import z from "zod";

export const RATE_LIMIT_BLOCK_SCHEMA = {
    rateLimitBehavior: z.enum(["ignore", "log-and-block", "log-only"]).default("log-and-block").optional(),
    blockBehavior: z.enum(["ignore", "block"]).default("block").optional(),
}