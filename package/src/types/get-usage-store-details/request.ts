// AUTO-GENERATED

// JSON Request format for route "/get-usage-store-details"

export type GetUsageStoreDetailsRequest = {

    /**
     * A string that uniquely identifies the usage store. This is commonly a user ID or a project
     * ID. Must only contain alphanumeric characters, underscores, and hyphens. Must be from 1 to
     * 100 characters long.
     */
    usageStoreId: string;
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