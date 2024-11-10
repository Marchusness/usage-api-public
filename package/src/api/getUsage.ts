import { GetUsageRequest } from "../types";
import { typedFetch } from "./fetch";

export async function getUsage(
  apiKey: string,
  request: GetUsageRequest,
) {
  return typedFetch(apiKey, request, "/get-usage");
}
