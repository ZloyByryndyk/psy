module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['airbnb'],
    plugins: [
        'babel',
        'import',
        'jsx-a11y',
        'react',
        'prettier',
    ],
    parser: 'babel-eslint',
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-use-before-define": ["error", { "variables": false }],
        'prefer-destructuring': 0,
        "global-require": 0,
        "camelcase": 0,
        "consistent-return": 0,
        "react/prop-types": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-pascal-case": 0,
        "react/prefer-stateless-function": 0,
        "object-curly-newline": ["error", {
            "multiline": true,
            "minProperties": 15,
            // "ObjectExpression": "always",
            // "ObjectPattern": { "multiline": false },
            // "ImportDeclaration": "never",
            // "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }],
        
           
        
        
        
        // 'arrow-parens': 'off', // Несовместимо с prettier
        // 'object-curly-newline': 'off', // Несовместимо с prettier
        // 'no-mixed-operators': 'off', // Несовместимо с prettier
        // 'arrow-body-style': 'off', // Это - не наш стиль?
        // 'function-paren-newline': 'off', // Несовместимо с prettier
        // 'no-plusplus': 'off',
        // 'space-before-function-paren': 0, // Несовместимо с prettier

        // 'max-len': ['error', 100, 2, { ignoreUrls: true, }], // airbnb позволяет некоторые пограничные случаи
        // 'no-console': 'error', // airbnb использует предупреждение
        // 'no-alert': 'error', // airbnb использует предупреждение

        // 'no-param-reassign': 'off', // Это - не наш стиль?
        // "radix": "off", // parseInt, parseFloat и radix выключены. Мне это не нравится.

        // 'react/require-default-props': 'off', // airbnb использует уведомление об ошибке
        // 'react/forbid-prop-types': 'off', // airbnb использует уведомление об ошибке
        // 'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb использует .jsx

        // 'prefer-destructuring': 'off',

        // 'react/no-find-dom-node': 'off', // Я этого не знаю
        // 'react/no-did-mount-set-state': 'off',
        // 'react/no-unused-prop-types': 'off', // Это всё ещё работает нестабильно
        // 'react/jsx-one-expression-per-line': 'off',
      }
}