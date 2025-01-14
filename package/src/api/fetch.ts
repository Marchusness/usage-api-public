import { RouteToRequestResponse } from "../types";

export async function typedFetch<P extends keyof RouteToRequestResponse>(
  apiKey: string,
  request: RouteToRequestResponse[P]["Request"],
  path: P,
  usageStoreApiKey?: string,
): Promise<RouteToRequestResponse[P]["Response"]> {
  try {
    const response = await fetch(`https://api.usageapi.com${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        ...(usageStoreApiKey !== undefined ? {
          "X-Usage-Store-Authorization": `Bearer ${usageStoreApiKey}`,
        } : {}),
      },
      cache: "no-cache",
      body: JSON.stringify(request),
    });

    return response.json() as Promise<RouteToRequestResponse[P]["Response"]>;
  } catch (error) {
    return {
      status: "error",
      data: {
        message: "fetch error",
      },
    };
  }
}
