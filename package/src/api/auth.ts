import { AuthRequest } from "../types";
import { typedFetch } from "./fetch";

export async function auth(
  apiKey: string,
  usageStoreApiKey: string,
  request: AuthRequest,
) {
  return typedFetch(apiKey, request, "/auth", usageStoreApiKey);
}
