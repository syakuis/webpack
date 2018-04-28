module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb'
  ],
  plugins: [
    'react',
    'jsx-a11y',
  ],
  settings: {
    'import/resolver': 'webpack',
    'import/parser': 'babel-eslint',
  },
}
