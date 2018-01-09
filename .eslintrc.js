// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    // 'generator-star-spacing': 'off',
    // allow debugger during development
    'indent': 0,
    'keyword-spacing': 0,
    'semi': 0,
    'no-trailing-spaces':0,
    'no-multiple-empty-lines': 0,
    'space-before-function-paren': 0,
    'comma-spacing': 0,
    'space-before-blocks': 0,
    'key-spacing': 0,
    'eol-last': 0,
    'space-before-function-paren': 0,
    'space-before-blocks': 0,
    'eqeqeq': 0,
    'no-unused-vars': 0,
    'no-useless-escape': 0,
    'no-unneeded-ternary': 0,
    'no-undef': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
