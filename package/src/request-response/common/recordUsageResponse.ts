
export type RecordingUsageResponsesCommon = {
  status: "authenticated";
  usageStoreId: string;
} | {
  status: "rateLimited";
  rateLimitIds: string[];
} | {
  status: "blocked";
} | {
  status: "unauthenticated";
}