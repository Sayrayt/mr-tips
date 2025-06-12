import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { 
      js 
    },
    extends: [
      "js/recommended"
    ]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.es2021
      } 
    }
  },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect" // Автоматически определяет версию React
      }
    }
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Не требует импорта React в новых версиях
      "react/jsx-uses-react": "off",    // Для React 17+ с новым JSX-трансформером
      "react/prop-types": "off"         // Если не используете PropTypes
    }
  }
]);