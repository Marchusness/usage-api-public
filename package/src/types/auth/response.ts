import { RecordingUsageResponsesCommon } from "../common/recordUsageResponse";
import { ResponseWrapper } from "../common/responseWrapper";

export type AuthResponse = ResponseWrapper<RecordingUsageResponsesCommon & {
    unauthorized: {};
}>
  