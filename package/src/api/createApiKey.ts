import { CreateKeyRequest } from "../types";
import { typedFetch } from "./fetch";

export async function createApiKey(
  privateApiKey: string,
  request: CreateKeyRequest,
) {
  return typedFetch(privateApiKey, request, "/create-key");
}
