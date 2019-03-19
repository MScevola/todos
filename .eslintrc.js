module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  rules: {
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['label'],
        allowChildren: true,
      },
    ],
    'import/no-unresolved': [2, { ignore: ['.pdf$'] }],
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-pascal-case': [2, { ignore: ['_404'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 0,
    'react/no-array-index-key': 'off',
    'no-unused-expressions': [2, { allowTernary: true }],
    'import/prefer-default-export': 'off',
    'react/no-did-mount-set-state': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-indent': [2],
    'no-unused-vars': 'warn',
    'prefer-destructuring': ['error', { object: false, array: false }],
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    indent: ['warn', 2, { SwitchCase: 1, ignoredNodes: ['JSXAttribute', 'JSXSpreadAttribute'] }],
    'no-underscore-dangle': 0,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
