import { UsageStoreDetails } from "./usageStoreDetails";

export type RecordingUsageResponsesCommon = {
  success: {
    usageStoreId: string;
    usageStoreDetails: UsageStoreDetails;
  };
  blocked: {
    usageStoreId: string;
    usageStoreDetails: UsageStoreDetails;
  };
};