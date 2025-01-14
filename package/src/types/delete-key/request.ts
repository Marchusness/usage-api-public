// AUTO-GENERATED

// JSON Request format for route "/delete-key"

export type DeleteKeyRequest = {

    /**
     * A string that uniquely identifies the usage store. This is commonly a user ID or a project
     * ID. Must only contain alphanumeric characters, underscores, and hyphens. Must be from 1 to
     * 100 characters long.
     */
    usageStoreId: string;

    /**
     * The ID of the API key to delete. This value is returned from the get-usage-store-details
     * endpoint or when the API key is created
     */
    apiKeyId: string;
};