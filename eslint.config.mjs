import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import stencil from '@stencil-community/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// Copiar el objeto stencil para modificarlo
const _stencil = { ...stencil };

const filterOut = (obj, prop) => {
  if (!obj || typeof obj !== 'object') {
    return {}; // Retorna un objeto vacío si `obj` es `undefined` o `null`
  }

  return Object.keys(obj)
    .filter(key => key !== prop)
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
};

// Verifica si las propiedades existen antes de modificarlas
if (_stencil.rules) {
  _stencil.rules = filterOut(_stencil.rules, 'async-methods');
}

if (_stencil.configs && _stencil.configs.base && _stencil.configs.base.rules) {
  _stencil.configs.base.rules = filterOut(_stencil.configs.base.rules, 'async-methods');
}

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@stencil-community/recommended',
    'plugin:prettier/recommended',
  ),
  {
    files: ['*.ts', '*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      // '@stencil-community': _stencil,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    // Puedes añadir reglas adicionales aquí
    rules: {},
  },
  {
    files: ['*.spec.ts', '*.e2e.ts'], // Si deseas reglas específicas para archivos de pruebas
    rules: {},
  },
];
