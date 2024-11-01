import { z } from "zod";
import { AuthRequest, AuthResponse, authSchema } from "./request-response/auth";
import { AuthAndRecordUsageRequest, AuthAndRecordUsageResponse, authAndRecordUsageSchema } from "./request-response/authAndRecordUsage";
import { RecordUsageRequest, RecordUsageResponse, recordUsageSchema } from "./request-response/recordUsage";
import { CreateKeyRequest, CreateKeyResponse, createKeySchema } from "./request-response/createApiKey";
import { DeleteKeyRequest, DeleteKeyResponse, deleteKeySchema } from "./request-response/deleteApiKey";
import { GetUsageStoreDetailsRequest, GetUsageStoreDetailsResponse, getUsageStoreDetailsSchema } from "./request-response/getUsageStoreDetails";
import { SetUsageStoreDetailsRequest, setUsageStoreDetailsSchema } from "./request-response/setUsageStoreDetails";

export type PathToObjectMapper = {
  "/auth": {
    request: AuthRequest;
    response: AuthResponse;
  },
  "/auth-and-record-usage": {
    request: AuthAndRecordUsageRequest;
    response: AuthAndRecordUsageResponse;
  },
  "/record-usage": {
    request: RecordUsageRequest;
    response: RecordUsageResponse;
  },

  "/create-key": {
    request: CreateKeyRequest;
    response: CreateKeyResponse;
  },
  "/delete-key": {
    request: DeleteKeyRequest;
    response: DeleteKeyResponse;
  },

  "/get-usage-store-details": {
    request: GetUsageStoreDetailsRequest;
    response: GetUsageStoreDetailsResponse;
  },
  "/set-usage-store-details": {
    request: SetUsageStoreDetailsRequest;
    response: SetUsageStoreDetailsRequest;
  },
};

export type UrlPath = keyof PathToObjectMapper;

type PathToSchema = {
  [K in UrlPath]: z.ZodType<PathToObjectMapper[K]["request"]>;
}

export const pathToSchema: PathToSchema = {
  "/auth": authSchema,
  "/auth-and-record-usage": authAndRecordUsageSchema,
  "/record-usage": recordUsageSchema,

  "/create-key": createKeySchema,
  "/delete-key": deleteKeySchema,

  "/get-usage-store-details": getUsageStoreDetailsSchema,
  "/set-usage-store-details": setUsageStoreDetailsSchema,
};

export * from "./request-response/auth";
export * from "./request-response/authAndRecordUsage";
export * from "./request-response/recordUsage";

export * from "./request-response/createApiKey";
export * from "./request-response/deleteApiKey";

export * from "./request-response/getUsageStoreDetails";
export * from "./request-response/setUsageStoreDetails";

export * from "./request-response/common"
