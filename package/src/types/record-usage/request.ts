// AUTO-GENERATED

// JSON Request format for route "/record-usage"

export type RecordUsageRequest = {

    /**
     * An array of up to 10 usage records.
     */
    usageRecords: {

        /**
         * A string key that uniquely identifies the usage record. Must only contain alphanumeric
         * characters, underscores, hyphens, and colons. Must be from 1 to 50 characters long.
         */
        key: string;

        /**
         * Any floating or integer value.
         */
        value: number;
    }[];

    /**
     * A string that uniquely identifies the usage store. This is commonly a user ID or a project
     * ID. Must only contain alphanumeric characters, underscores, and hyphens. Must be from 1 to
     * 100 characters long.
     */
    usageStoreId: string;

    /**
     * Controls whether to block requests based on the 'blockAfterTimestamp' field in the usage
     * store. If 'ignore', requests will proceed regardless of blockAfterTimestamp. If 'block',
     * requests will be blocked if their timestamp is after blockAfterTimestamp in the usage store.
     */
    blockBehavior?: ("ignore" | "block") | undefined;

    /**
     * Controls whether to sample requests. If 'ignore', requests will be recorded regardless of
     * sampling behavior. If 'sample', requests will be sampled based on the sampling rate.
     */
    samplingBehavior?: ("ignore" | "sample") | undefined;

    /**
     * If no usage store is found and type is create it will create a new usage store with the given
     * parameters. If there is no usage store and the type is blocked the request will be blocked.
     */
    onNoUsageStore?: ({
        type: "create";
        samplingConfig?: {

            /**
             * The keys to sample based on.
             */
            keys: string[];

            /**
             * The accuracy of the sampling.
             */
            accuracy: {

                /**
                 * The confidence percent.
                 */
                confidencePercent: number;

                /**
                 * The error margin percent.
                 */
                errorMarginPercent: number;

                /**
                 * The period seconds.
                 */
                periodSeconds: number;
            };
        } | undefined;
        blockAfterTimestamp?: number | undefined;
    } | {
        type: "block";
    }) | undefined;
};