module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: 'off',
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'no-plusplus': 'off',
    'linebreak-style': 'off',
    'array-callback-return': 'off',
  },
}
