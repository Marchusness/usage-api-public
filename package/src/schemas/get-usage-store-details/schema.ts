import z from "zod";
import { usageStoreIdSchema } from "../common/usageStoreId";
import { onNoUsageStore } from "../common/onNoUsageStore";

export default z.object({
    usageStoreId: usageStoreIdSchema,
    onNoUsageStore: onNoUsageStore.optional(),
  });