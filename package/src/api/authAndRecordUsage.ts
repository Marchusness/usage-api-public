import { AuthAndRecordUsageRequest } from "../types";
import { typedFetch } from "./fetch";

export async function authAndRecordUsage(
  apiKey: string,
  usageStoreApiKey: string,
  request: AuthAndRecordUsageRequest,
) {
  return typedFetch(apiKey, request, "/auth-and-record-usage", usageStoreApiKey);
}
