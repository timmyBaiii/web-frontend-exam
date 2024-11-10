module.exports = {
    "parserOptions": {
        "parser": "babel-eslint",
        "sourceType": "module",
        "ecmaVersion": "latest",
        "ecmaFeatures": {
            "jsx": true,
            "tsx": true
        },
    },
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "es2016": true,
        "es2017": true,
        "es2018": true,
        "es2019": true,
        "es2020": true,
        "es2021": true,
        "es2022": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ],
    "overrides": [
        {
            "files": [ "*.js", "*.jsx" ],
            "rules": {
                "indent": ["error", 4, { "SwitchCase": 1 }],
                "no-control-regex": 0
            }
        },
        {
            "files": [ "*.ts", "*.tsx" ],
            "rules": {
                "indent": ["error", 4, { "SwitchCase": 1 }],
                "no-control-regex": 0
            }
        },
        {
            "files": [ "*.sass", "*.scss" ],
            "rules": {
                "indent": ["error", 4, { "SwitchCase": 1 }]
            }
        }
    ],
    "rules": {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        // 檢查未使用變數，"vars": "all" 檢查所有變數情況。"args": "none" 不需檢查參數
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "none"
        }],
        // 禁止帶有 new Object 運算符
        "no-new-object": "error",
        // 禁止重複 key 值
        "no-dupe-keys": "error",
        // 禁止多餘空格
        "no-multi-spaces": "error",
        // 禁制重新設定 const 變數
        "no-const-assign": "error",
        // 禁止函式宣告同名參數
        "no-dupe-args": "error",
        // 禁止引入重複模組
        "no-duplicate-imports": "error",
        // 禁止解構式為空
        "no-empty-pattern": "error",
        // 禁止不規則控隔
        "no-irregular-whitespace": "error",
        // 強制 switch 語句必須 default 情況
        "default-case": "error",
        // 禁止使用 eval 語句
        "no-eval": "error",
        // 禁止使用類似 eval 語句
        "no-implied-eval": "error",
        // 禁止不必要的分號
        "no-extra-semi": "error",
        // 禁制變數重新宣告
        "no-redeclare": "error",
        // 禁止使用 var 關鍵字，宣告變數
        "no-var": "error",
        // 禁止不必要的括號
        "no-extra-parens": "error",
        // 強制一致逗號樣式
        // 強制必須加分號
        "semi": ["error", "always"],
        // 強制使用單引號
        "quotes": ["error", "double"],
        // 箭頭函式前後皆須空白
        "arrow-spacing": ["error", {
            "before": true,
            "after": true
        }],
        // 大括號擺放樣式
        "brace-style": ["error", "stroustrup"],
        "comma-style": ["error", "last"],
        "block-spacing": ["error", "never"],
        "no-undef": "off",
        "no-extra-parens": "off"
    }
};
