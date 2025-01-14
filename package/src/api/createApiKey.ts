import { CreateKeyRequest, CreateKeyResponse } from "../types";
import { typedFetch } from "./fetch";

export async function createApiKey(
  privateApiKey: string,
  request: CreateKeyRequest,
): Promise<CreateKeyResponse> {
  return typedFetch(privateApiKey, request, "/create-key");
}
