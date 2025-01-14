import { RecordUsageRequest, RecordUsageResponse } from "../types";
import { typedFetch } from "./fetch";

export async function recordUsage(
  apiKey: string,
  request: RecordUsageRequest,
): Promise<RecordUsageResponse> {
  return typedFetch(apiKey, request, "/record-usage");
}
