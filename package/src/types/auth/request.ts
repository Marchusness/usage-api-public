// AUTO-GENERATED

// JSON Request format for route "/auth"

export type AuthRequest = {

    /**
     * Controls whether to block requests based on the 'blockAfterTimestamp' field in the usage
     * store. If 'ignore', requests will proceed regardless of blockAfterTimestamp. If 'block',
     * requests will be blocked if their timestamp is after blockAfterTimestamp in the usage store.
     */
    blockBehavior?: ("ignore" | "block") | undefined;
};