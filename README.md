# Teach Myself Typescript

## Project Setup
Setup Typescript project
```    
    tsc --init
```

Init yarn project
```
yarn init
```

## Project Structure
teach-myself-typescript\
|--  dist/\
|--  src/\
|--  tests/\
.eslintrc.cjs\
.gitignore\
jest.config.js\
package-lock.json\
tsconfig.json\
yarn.lock

## Install Jest
Install test library as development dependency
```
yarn add -D jest @types/jest ts-jest
```

Add jest configuration called `jest.config.js` on root of project
```
/** @type {import('jest').Config} */
const config = {
    preset: 'ts-jest',
    verbose: true,
    transform: { '^.+\\.tsx?$': 'ts-jest' },
    modulePaths: ['<rootDir>', 'node_modules'],
    moduleFileExtensions: ['js', 'ts', 'json'],
    moduleDirectories: ['node_modules', 'src'],
};

module.exports = config;
```

## Install typescript eslint
Install typescript eslint command
```
yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
```

create `.eslintrc.cjs` config file in the root of project
```
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
```

## Install Prettier
