const prettierConfig = require('./.prettierrc');

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  ignorePatterns: [
    '/.next',
    '/.husky',
    '/docs',
    '/node_modules',
    '/prisma',
    '*.json'
  ],
  rules: {
    // Possible errors
    'no-console': 'off',
    'no-nested-ternary': 'off',
    // Best practices
    camelcase: 'off', // Off for some db stuff...
    'dot-notation': 'error',
    'no-else-return': 'error',
    'no-floating-decimal': 'error',
    'no-sequences': 'error',
    // Stylistic
    'array-bracket-spacing': 'error',
    'computed-property-spacing': ['error', 'never'],
    curly: 'error',
    'no-lonely-if': 'error',
    'no-unneeded-ternary': 'error',
    'one-var-declaration-per-line': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true
      }
    ],
    // ES6
    'array-callback-return': 'off',
    'prefer-const': 'error',
    // Imports
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [0, { caseSensitive: false }],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }
    ],
    'import/extensions': [0],
    'no-unused-expressions': 'off',
    'no-prototype-builtins': 'off',
    // REACT
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/href-no-hash': [0],
    'react/display-name': 0,
    'react/no-deprecated': 'error',
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true
      }
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    // Prettier
    // eslint looks for the prettier config at the top level of the package/app
    // but the config lives in the `config/` directory. Passing the config here
    // to get around this.
    'prettier/prettier': ['error', prettierConfig]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
