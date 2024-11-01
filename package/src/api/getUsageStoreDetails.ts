import { GetUsageStoreDetailsRequest } from "../types";
import { typedFetch } from "./fetch";

export async function getUsageStoreDetails(
  apiKey: string,
  request: GetUsageStoreDetailsRequest,
) {
  return typedFetch(apiKey, request, "/get-usage-store-details");
}
