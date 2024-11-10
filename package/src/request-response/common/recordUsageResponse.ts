
export type RecordingUsageResponsesCommon = {
  success: {
    usageStoreId: string;
  };
  rateLimited: {
    usageStoreId: string;
    rateLimitIds: string[];
  };
  blocked: {
    usageStoreId: string;
  };
};