module.exports = {
    root: true,
    env: {
        es2021: true,
    },
    ignorePatterns: ["src/dist"],
    env: {
        es2021: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2022,
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
    },
    rules: {
        'no-obj-calls': ['error'],
    },
};
