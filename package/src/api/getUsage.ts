import { GetUsageRequest, GetUsageResponse } from "../types";
import { typedFetch } from "./fetch";

export async function getUsage(
  apiKey: string,
  request: GetUsageRequest,
): Promise<GetUsageResponse> {
  return typedFetch(apiKey, request, "/get-usage");
}
