import z from "zod";
import { blockAfterTimestampSchema } from "./blockSchema";

export const samplingConfigSchema = z.object({
  key: z.string().describe('The key to sample based on. If not provided, usage records will be sampled based on the total number of requests.'),
  accuracy: z.object({
    confidencePercent: z.number().describe('The confidence percent.'),
    errorMarginPercent: z.number().describe('The error margin percent.'),
    periodSeconds: z.number().describe('The period seconds.'),
  }).describe("The accuracy of the sampling. Over 'periodSeconds' seconds, there will be a 'confidencePercent' confidence that the predicted usage will be within 'errorMarginPercent' of the actual usage."),
})

export const onNoUsageStore = z.union([
    z.object({
      type: z.literal('create'),
      samplingConfig: z.optional(samplingConfigSchema),
      blockAfterTimestamp: z.optional(blockAfterTimestampSchema),
    }),
    z.object({
      type: z.literal('block'),
    })
  ])
  .describe(`If no usage store is found and type is create it will create a new usage store with the given parameters. If there is no usage store and the type is blocked the request will be blocked.`)

export const ON_NO_USAGE_STORE_DESCRIPTION = 'If no usage store is found and type is create it will create a new usage store with the given parameters. If there is no usage store and the type is blocked the request will be blocked.'