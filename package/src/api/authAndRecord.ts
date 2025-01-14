import { AuthAndRecordRequest, AuthAndRecordResponse } from "../types";
import { typedFetch } from "./fetch";

export async function authAndRecord(
  apiKey: string,
  usageStoreApiKey: string,
  request: AuthAndRecordRequest,
): Promise<AuthAndRecordResponse> {
  return typedFetch(apiKey, request, "/auth-and-record", usageStoreApiKey);
}
