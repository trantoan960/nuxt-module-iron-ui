module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        indent: ['warn', 4],
        semi: ['warn', 'always'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-prototype-builtins': 'off',
        'max-params': 'off',
        'max-nested-callbacks': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-interface': 'off'
    }
};
