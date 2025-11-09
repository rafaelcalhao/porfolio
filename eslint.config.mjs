import { FlatCompat } from "@eslint/compat";
import path from "path";
import { fileURLToPath } from "url";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

// Recreate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a compatibility instance
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default tseslint.config(
  {
    ignores: ["node_modules/", ".next/"],
  },
  ...compat.extends("airbnb-typescript"),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // Disable ESLint rules that conflict with Prettier
  prettierConfig
);
