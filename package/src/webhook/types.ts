import { internalRouteStatusResults, UsageDoc } from "../request-response/common/usageDoc";

export type WebhookData = {
    project: string;
    usageStore: string;
    usage: UsageDoc;
}

export function isUsageDoc(data: any): data is UsageDoc {
    if (typeof data !== 'object') return false;
    if (!internalRouteStatusResults.every(key => key in data && typeof data[key] === "number")) return false;
    if (typeof data.usageRecords !== 'object') return false;
    if (!Object.values(data.usageRecords).every(val => typeof val === 'number')) return false;
    return true;
}

export function isWebhookData(data: any): data is WebhookData {
    const baseKeys = ['project', 'usageStore', 'usage'];
    if (typeof data !== 'object') return false;
    if (Object.keys(data).length !== baseKeys.length) return false;
    if (!baseKeys.every(key => key in data)) return false;
    if (typeof data.project !== 'string') return false;
    if (typeof data.usageStore !== 'string') return false;
    if (!isUsageDoc(data.usage)) return false;
    return true;
}