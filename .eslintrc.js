module.exports = {
  root: true,
  extends: [
    'prettier',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
  ],
  ignorePatterns: ['.eslintrc.js', '*.json'],
  plugins: ['import', 'promise', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'promise/catch-or-return': 'off',
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/default-param-last': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
