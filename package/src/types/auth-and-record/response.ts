import { RecordingUsageResponsesCommon } from "../common/recordUsageResponse";
import { ResponseWrapper } from "../common/responseWrapper";

export type AuthAndRecordResponse = ResponseWrapper<RecordingUsageResponsesCommon & {
    unauthorized: {};
  }>;
  