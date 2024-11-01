import { DeleteKeyRequest } from "../types";
import { typedFetch } from "./fetch";

export async function deleteApiKeyDelete(
  privateApiKey: string,
  request: DeleteKeyRequest,
) {
  return typedFetch(privateApiKey, request, "/delete-key");
}