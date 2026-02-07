import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
      "no-console": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-no-undef": "error",
      "react/prop-types": "off",
      "react/jsx-uses-vars": "warn",
      "arrow-parens": ["error", "always"],
      "import/no-unresolved": "error",
      "@next/next/no-async-client-component": "off",
      "react-hooks/set-state-in-effect": "off",
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        alias: {
          map: [
            ["@", "./src"],
            ["@app", "./src/app"],
            ["@assets", "./src/assets"],
            ["@components", "./src/components"],
            ["@config", "./src/config"],
            ["@contexts", "./src/contexts"],
            ["@helpers", "./src/helpers"],
            ["@hooks", "./src/hooks"],
            ["@middlewares", "./src/middlewares"],
            ["@services", "./src/services"],
            ["@statics", "./src/statics"],
            ["@store", "./src/store"],
            ["@styles", "./src/styles"],
            ["@utils", "./src/utils"],
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
]);

export default eslintConfig;
