export type RateLimitConfigs = Record<string, {
  maxCapacity: number;
  refillCapacity: number;
  refillTimeSeconds: number;
}>
  
export type ApiKeys = Record<string, {
  keyName: string;
}>

export interface UsageStoreDetails {
  keys: ApiKeys;
  rateLimits?: RateLimitConfigs;
  blockAfterTimestamp?: number;
}
  