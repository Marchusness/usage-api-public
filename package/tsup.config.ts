import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/types.ts", "src/webhook.ts", "src/schemas.ts"],
  target: "es2020",
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true, // generate dts files
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
});