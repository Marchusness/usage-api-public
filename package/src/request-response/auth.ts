import { z } from "zod";
import { ResponseWrapper } from "./common/responseWrapper";
import { RecordingUsageResponsesCommon } from "./common/recordUsageResponse";
import { RATE_LIMIT_BLOCK_SCHEMA } from "./common/rateLimitBlock";

export const authSchema = z.object({
  ...RATE_LIMIT_BLOCK_SCHEMA,
});

export type AuthRequest = z.infer<typeof authSchema>;

export type AuthResponse = ResponseWrapper<RecordingUsageResponsesCommon & {
  unauthorized: {};
}>
