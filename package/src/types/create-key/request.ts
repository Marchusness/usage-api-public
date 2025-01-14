// AUTO-GENERATED

// JSON Request format for route "/create-key"

export type CreateKeyRequest = {

    /**
     * A string that uniquely identifies the usage store. This is commonly a user ID or a project
     * ID. Must only contain alphanumeric characters, underscores, and hyphens. Must be from 1 to
     * 100 characters long.
     */
    usageStoreId: string;

    /**
     * A string that uniquely identifies the API key. Must only contain alphanumeric characters,
     * underscores, and hyphens. Must be from 1 to 50 characters long.
     */
    keyName: string;
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