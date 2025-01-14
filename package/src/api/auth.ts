import { AuthRequest, AuthResponse } from "../types";
import { typedFetch } from "./fetch";

export async function auth(
  apiKey: string,
  usageStoreApiKey: string,
  request?: AuthRequest,
): Promise<AuthResponse> {
  return typedFetch(apiKey, request ?? {}, "/auth", usageStoreApiKey);
}
