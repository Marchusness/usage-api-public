import z from "zod";

export const SAMPLING_SCHEMA = {
    samplingBehavior: z.enum(["ignore", "sample"])
        .default("sample")
        .optional()
        .describe("Controls whether to sample requests. If 'ignore', requests will be recorded regardless of sampling behavior. If 'sample', requests will be sampled based on the sampling rate."),
}