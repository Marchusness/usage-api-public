import { AuthAndRecordUsageRequest } from "../types";
import { typedFetch } from "./fetch";

export async function authAndRecordUsage(
  apiKey: string,
  request: AuthAndRecordUsageRequest,
  usageStoreApiKey: string,
) {
  return typedFetch(apiKey, request, "/auth-and-record-usage", usageStoreApiKey);
}
