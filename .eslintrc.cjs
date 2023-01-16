module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: "./",
    },
    rules: {
        "arrow-body-style": 0,
        "arrow-parens": "off",
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "comma-dangle": ["error", "always-multiline"],
        "dot-notation": "error",
        "indent": 0,
        "no-console": "off",
        "no-use-before-define": "warn",
        "no-underscore-dangle": "off",
        "object-curly-spacing": 0,
        "object-property-newline": 0,
        "prefer-destructuring": [
            "error",
            {
                "array": false,
                "object": true
            },
            {
                "enforceForRenamedProperties": false
            }
        ],
        "quotes": 0,
        "radix": ["error", "as-needed"],
        "prefer-const": 1,
        "no-var": 0,
        "@typescript-eslint/no-implied-eval": 1,
        "@typescript-eslint/require-await": 1,
        "@typescript-eslint/no-misused-promises": 0,
        "@typescript-eslint/prefer-regexp-exec": 0,
        "@typescript-eslint/await-thenable": 0,
        "@typescript-eslint/restrict-plus-operands": 0,
        "@typescript-eslint/unbound-method": 0,
        "@typescript-eslint/no-floating-promises": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-call": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/restrict-template-expressions": 0,
        "@typescript-eslint/no-unsafe-return": 1
    },
};