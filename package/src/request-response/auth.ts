import { z } from "zod";
import { ResponseWrapper } from "./common/responseWrapper";
import { RecordingUsageResponsesCommon } from "./common/recordUsageResponse";

export const authSchema = z.object({
  useRateLimit: z.boolean(),
  useBlock: z.boolean(),
});

export type AuthRequest = z.infer<typeof authSchema>;

export type AuthResponse = ResponseWrapper<RecordingUsageResponsesCommon>
