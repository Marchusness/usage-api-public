export type RateLimitConfigs = Record<string, {
    limit: number;
    timeWindowSeconds: number;
  }>
  
  export type ApiKeys = Record<string, {
    keyName: string;
  }>

export interface UsageStoreDetails {
    keys: ApiKeys;
    rateLimits?: RateLimitConfigs;
    blocked?: boolean;
  }
  