import { z } from "zod";
import { AuthRequest, AuthResponse, authSchema } from "./request-response/auth";
import { AuthAndRecordUsageRequest, AuthAndRecordUsageResponse, authAndRecordUsageSchema } from "./request-response/authAndRecordUsage";
import { RecordUsageRequest, RecordUsageResponse, recordUsageSchema } from "./request-response/recordUsage";
import { CreateKeyRequest, CreateKeyResponse, createKeySchema } from "./request-response/createApiKey";
import { DeleteKeyRequest, DeleteKeyResponse, deleteKeySchema } from "./request-response/deleteApiKey";
import { GetUsageStoreDetailsRequest, GetUsageStoreDetailsResponse, getUsageStoreDetailsSchema } from "./request-response/getUsageStoreDetails";
import { SetUsageStoreDetailsRequest, setUsageStoreDetailsSchema } from "./request-response/setUsageStoreDetails";
import { GetUsageRequest, GetUsageResponse, getUsageSchema } from "./request-response/getUsage";

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
  "/get-usage-store-details": {
    request: GetUsageStoreDetailsRequest;
    response: GetUsageStoreDetailsResponse;
  },

  "/create-key": {
    request: CreateKeyRequest;
    response: CreateKeyResponse;
  },
  "/delete-key": {
    request: DeleteKeyRequest;
    response: DeleteKeyResponse;
  },

  "/set-usage-store-details": {
    request: SetUsageStoreDetailsRequest;
    response: SetUsageStoreDetailsRequest;
  },
  "/get-usage": {
    request: GetUsageRequest;
    response: GetUsageResponse;
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
  "/get-usage-store-details": getUsageStoreDetailsSchema,

  "/create-key": createKeySchema,
  "/delete-key": deleteKeySchema,

  "/set-usage-store-details": setUsageStoreDetailsSchema,
  "/get-usage": getUsageSchema,
};

export * from "./request-response/auth";
export * from "./request-response/authAndRecordUsage";
export * from "./request-response/recordUsage";
export * from "./request-response/getUsageStoreDetails";

export * from "./request-response/createApiKey";
export * from "./request-response/deleteApiKey";

export * from "./request-response/setUsageStoreDetails";
export * from "./request-response/getUsage";

export * from "./request-response/common"
