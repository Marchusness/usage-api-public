
export const internalRouteStatusResults = [
    "op_recorded",
    "op_blocked",
    "op_rate_limited",
    "op_unauthenticated",
    "op_authenticated",
    "op_store_returned",
    "ad_create_key",
    "ad_del_key",
    "ad_del_key_not_found",
    "ad_get_usage",
    "ad_set_store"
] as const;

export type InternalRouteStatus = typeof internalRouteStatusResults[number];

export type UsageDoc = {
    hourStartTimestamp: number;
    usageRecords: Record<string, number>;
} & Record<InternalRouteStatus, number>;
