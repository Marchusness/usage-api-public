// AUTO-GENERATED

// JSON Request format for route "/set-usage-store-details"

export type SetUsageStoreDetailsRequest = {

    /**
     * A string that uniquely identifies the usage store. This is commonly a user ID or a project
     * ID. Must only contain alphanumeric characters, underscores, and hyphens. Must be from 1 to
     * 100 characters long.
     */
    usageStoreId: string;

    /**
     * The timestamp after which requests will be blocked. Must be in milliseconds since the Unix
     * epoch (January 1, 1970 00:00:00 UTC).
     */
    blockAfterTimestamp?: number | undefined;
};