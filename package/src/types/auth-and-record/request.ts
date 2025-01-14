// AUTO-GENERATED

// JSON Request format for route "/auth-and-record"

export type AuthAndRecordRequest = {

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
};