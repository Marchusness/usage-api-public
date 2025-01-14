import { SetUsageStoreDetailsRequest, SetUsageStoreDetailsResponse } from "../types";
import { typedFetch } from "./fetch";

export async function setUsageStoreDetails(
  apiKey: string,
  request: SetUsageStoreDetailsRequest,
): Promise<SetUsageStoreDetailsResponse> {
  return typedFetch(apiKey, request, "/set-usage-store-details");
}
