module.exports = {
    // 指定為常使用的文件擴展名
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
    // 轉換測試對象
    transform: {
        // '.+\\.js$': 'react-jest',
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
        "^.+\\.jsx?$": "babel-jest"
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    // 快照序列化
    snapshotSerializers: [],
    // 目標測試文件類型
    testMatch: [
        "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
    ],
    // 指定全域數組覆蓋文件
    collectCoverageFrom: [],
    coverageDirectory: "<rootDir>/tests/unit/coverage",
    // collectCoverage: true,
    coverageReporters: ["lcov", "text-summary"],
    // jest 應該輸出及覆蓋文件目錄
    testURL: "http://localhost/"
};
