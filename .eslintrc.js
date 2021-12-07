module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    document: true,
    process: true,
    window: true,
    JSX: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['eslint-plugin-import'],
  rules: {
    'react/state-in-constructor': 0,
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': ['error', 'nofunc'],
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'groupCollapsed', 'groupEnd'] }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
      },
      extends: ['airbnb-typescript', 'airbnb/hooks', 'prettier'],
      plugins: ['eslint-plugin-import'],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
        '@typescript-eslint/no-explicit-any': 'error',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
};
