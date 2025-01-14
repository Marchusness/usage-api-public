export type ApiKeys = Record<string, {
  keyName: string;
}>

export interface UsageStoreDetails {
  keys: ApiKeys;
  blockAfterTimestamp?: number;
  samplingConfig?: {
    keys: string[];

    // Over a period of 'periodSeconds' seconds, you will be 'confidencePercent' confident that the predicted usage will be within 'errorMarginPercent' of the actual usage.
    accuracy: {
      confidencePercent: number;
      errorMarginPercent: number;
      periodSeconds: number;
    }
  }
  estimatedMaxRequestsPerSecond?: number;
}