import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
  {
    plugins: {
      'import'
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',     // Built-in imports (come from NodeJS)
            'external',    // External imports
            'internal',    // Absolute imports
            ['sibling', 'parent'], // Relative imports
            'index',      // index imports
            'unknown'     // unknown
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc', // sort in ascending order
            caseInsensitive: true // ignore case
          }
        }
      ],
      'import/newline-after-import': 'error'
    }
  },
];
