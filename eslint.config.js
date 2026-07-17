import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

const sharedRules = {
  // Import Sorting
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',

  // TypeScript
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/no-explicit-any': 'warn',

  // Allgemein
  'no-console': 'warn',
  'no-debugger': 'error',
  'prefer-const': 'error',
  'no-var': 'error',
  'object-shorthand': 'error',
};

export default defineConfig(
  {
    ignores: [
      '**/dist',
      '**/build',
      '**/coverage',
      '**/node_modules',
      '**/.wrangler',
      'backend/worker-configuration.d.ts',
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  // Frontend — React app
  {
    files: ['frontend/**/*.{ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // React Hooks
      ...reactHooks.configs.recommended.rules,

      // Vite HMR
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      ...sharedRules,
    },
  },

  // Backend — Cloudflare Worker
  {
    files: ['backend/**/*.ts'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.serviceworker,
    },

    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      ...sharedRules,
    },
  },

  // Root-level tooling scripts (Node)
  {
    files: ['scripts/**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },

    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      ...sharedRules,
      'no-console': 'off',
    },
  },
);
