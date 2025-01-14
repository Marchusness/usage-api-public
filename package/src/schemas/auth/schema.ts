import z from "zod";
import { BLOCK_SCHEMA } from "../common/blockSchema";

export default z.object({
    ...BLOCK_SCHEMA,
});