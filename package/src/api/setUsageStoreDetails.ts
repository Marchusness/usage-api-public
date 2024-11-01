import { SetUsageStoreDetailsRequest } from "../types";
import { typedFetch } from "./fetch";

export async function setUsageStoreDetails(
  apiKey: string,
  request: SetUsageStoreDetailsRequest,
) {
  return typedFetch(apiKey, request, "/set-usage-store-details");
}
