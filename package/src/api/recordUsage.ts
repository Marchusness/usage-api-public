import { RecordUsageRequest } from "../types";
import { typedFetch } from "./fetch";

export async function recordUsage(
  apiKey: string,
  request: RecordUsageRequest,
) {
  return typedFetch(apiKey, request, "/record-usage");
}
