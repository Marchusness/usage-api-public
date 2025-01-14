import { DeleteKeyRequest, DeleteKeyResponse } from "../types";
import { typedFetch } from "./fetch";

export async function deleteApiKey(
  privateApiKey: string,
  request: DeleteKeyRequest,
): Promise<DeleteKeyResponse> {
  return typedFetch(privateApiKey, request, "/delete-key");
}
