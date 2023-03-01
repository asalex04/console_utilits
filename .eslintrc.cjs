module.exports = {
    env: {
        node: true,
        es2021: true
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: [2, 4],
        "semi": "off",
        'import/extensions': 'off',
        'no-console': 'off'
    },
}
