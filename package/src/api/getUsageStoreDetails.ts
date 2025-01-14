import { GetUsageStoreDetailsRequest, GetUsageStoreDetailsResponse } from "../types";
import { typedFetch } from "./fetch";

export async function getUsageStoreDetails(
  apiKey: string,
  request: GetUsageStoreDetailsRequest,
): Promise<GetUsageStoreDetailsResponse> {
  return typedFetch(apiKey, request, "/get-usage-store-details");
}
