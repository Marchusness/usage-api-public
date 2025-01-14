// AUTO-GENERATED

import { AuthRequest } from './auth/request';
import { AuthResponse } from './auth/response';
import { AuthAndRecordRequest } from './auth-and-record/request';
import { AuthAndRecordResponse } from './auth-and-record/response';
import { CreateKeyRequest } from './create-key/request';
import { CreateKeyResponse } from './create-key/response';
import { DeleteKeyRequest } from './delete-key/request';
import { DeleteKeyResponse } from './delete-key/response';
import { GetUsageRequest } from './get-usage/request';
import { GetUsageResponse } from './get-usage/response';
import { GetUsageStoreDetailsRequest } from './get-usage-store-details/request';
import { GetUsageStoreDetailsResponse } from './get-usage-store-details/response';
import { RecordUsageRequest } from './record-usage/request';
import { RecordUsageResponse } from './record-usage/response';
import { SetUsageStoreDetailsRequest } from './set-usage-store-details/request';
import { SetUsageStoreDetailsResponse } from './set-usage-store-details/response';


export type RouteToRequestResponse = {
    "/auth": {
        Request: AuthRequest,
        Response: AuthResponse,
    },
    "/auth-and-record": {
        Request: AuthAndRecordRequest,
        Response: AuthAndRecordResponse,
    },
    "/create-key": {
        Request: CreateKeyRequest,
        Response: CreateKeyResponse,
    },
    "/delete-key": {
        Request: DeleteKeyRequest,
        Response: DeleteKeyResponse,
    },
    "/get-usage": {
        Request: GetUsageRequest,
        Response: GetUsageResponse,
    },
    "/get-usage-store-details": {
        Request: GetUsageStoreDetailsRequest,
        Response: GetUsageStoreDetailsResponse,
    },
    "/record-usage": {
        Request: RecordUsageRequest,
        Response: RecordUsageResponse,
    },
    "/set-usage-store-details": {
        Request: SetUsageStoreDetailsRequest,
        Response: SetUsageStoreDetailsResponse,
    },
}


export {
    AuthRequest,
    AuthAndRecordRequest,
    CreateKeyRequest,
    DeleteKeyRequest,
    GetUsageRequest,
    GetUsageStoreDetailsRequest,
    RecordUsageRequest,
    SetUsageStoreDetailsRequest,
    AuthResponse,
    AuthAndRecordResponse,
    CreateKeyResponse,
    DeleteKeyResponse,
    GetUsageResponse,
    GetUsageStoreDetailsResponse,
    RecordUsageResponse,
    SetUsageStoreDetailsResponse,
}