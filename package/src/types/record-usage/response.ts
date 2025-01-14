import { RecordingUsageResponsesCommon } from "../common/recordUsageResponse";
import { ResponseWrapper } from "../common/responseWrapper";

export type RecordUsageResponse = ResponseWrapper<RecordingUsageResponsesCommon & {
    usageStoreNotFound: {};
  }>
  
  