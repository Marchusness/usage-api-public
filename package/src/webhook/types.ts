import { UsageDoc } from "../types";

export type WebhookData = {
    project: string;
    usageStore: string;
    usage: UsageDoc;
}

export function isUsageDoc(data: any): data is UsageDoc {
    if (typeof data !== 'object') throw new Error('Usage doc is not an object');

    if (typeof data.hourStartTimestamp !== 'number') throw new Error('Usage doc hourStartTimestamp is not a number');
    if (typeof data.usageRecords !== 'object') throw new Error('Usage doc usageRecords is not an object');
    if (!Object.values(data.usageRecords).every(val => typeof val === 'number')) throw new Error('Usage doc usageRecords values are not numbers');

    return true;
}

export function isWebhookData(data: any): data is WebhookData {
    if (typeof data !== 'object') throw new Error('Webhook data is not an object');

    const baseKeys = ['project', 'usageStore', 'usage'];    
    if (!baseKeys.every(key => key in data)) throw new Error('Webhook data is missing required keys');

    if (typeof data.project !== 'string') throw new Error('Webhook data project is not a string');
    if (typeof data.usageStore !== 'string') throw new Error('Webhook data usageStore is not a string');

    if (!isUsageDoc(data.usage)) throw new Error('Webhook data usage is not a usage doc');

    return true;
}