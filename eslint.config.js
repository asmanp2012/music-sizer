import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginWc from "eslint-plugin-wc";
import eslintPluginJsdoc from "eslint-plugin-jsdoc";
import globals from "globals";

export default tseslint.config(
  {
    ignores: [
      "node_modules",
      "dist",
      "**/*.js",
      "**/*.map",
      "**/*.d.ts",
    ]
  },
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    }
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginWc.configs["flat/recommended"],
  eslintPluginJsdoc.configs["flat/recommended"],

  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./ts-lint.json",
        tsconfigRootDir: import.meta.dirname,
      }
    },
    plugins: {
      "wc": eslintPluginWc,
      "jsdoc": eslintPluginJsdoc
    },
    settings: {
      wc: {
        elementBaseClasses: ["LitElement"]
      }
    },
    rules: {
      "jsdoc/tag-lines": "off",
      "no-eval": ["error", { allowIndirect: true }],
      "curly": ["error", "all"],
      "comma-dangle": ["error", {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "only-multiline"
      }],
      "no-void": ["error", { allowAsStatement: true }],
      "@typescript-eslint/return-await": ["error", "in-try-catch"],
      "@typescript-eslint/no-inferrable-types": ["off", {
        ignoreParameters: true,
        ignoreProperties: true
      }],
      "@typescript-eslint/no-misused-promises": ["error", {
        checksVoidReturn: false,
        checksConditionals: true
      }],

      "import/export": "off",
      "jsdoc/require-param": "off",
      "jsdoc/require-returns": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/prefer-includes": "off",
      "@typescript-eslint/no-invalid-void-type": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/promise-function-async": "off",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off"
    }
  }
);