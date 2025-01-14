// AUTO-GENERATED

// JSON Request format for route "/get-usage"

export type GetUsageRequest = {

    /**
     * A string that uniquely identifies the usage store. This is commonly a user ID or a project
     * ID. Must only contain alphanumeric characters, underscores, and hyphens. Must be from 1 to
     * 100 characters long.
     */
    usageStoreId: string;

    /**
     * The date range to retrieve usage data.
     */
    dateSelection: {

        /**
         * The start date of the usage data to retrieve (inclusive). Must be in ISO 8601 format.
         * This value will be rounded down to the nearest hour.
         */
        startDate: string;

        /**
         * The end date of the usage data to retrieve (inclusive). Must be in ISO 8601 format. This
         * value will be rounded down to the nearest hour.
         */
        endDate: string;
    } | {

        /**
         * The date of the usage data to retrieve. Must be in ISO 8601 format. This value will be
         * rounded down to the nearest hour.
         */
        singleHour: string;
    } | {

        /**
         * Must be a whole number between 1 and 168.
         */
        pastHours: number;
    };
};