import { pluginImport } from "eslint-plugin-import";

/** @type {import("eslint").Linter.Config} */
export const nextJsConfig = [
  // ... existing configs
  {
    plugins: {
      import: pluginImport
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
  }
]; 