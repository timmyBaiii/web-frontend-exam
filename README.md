# Frontend Engineer Exam

這是一份 Yile 前端工程師的徵才專案，會需根據規則及設計檔完成頁面需求。

## ⭐️ 需求

### 框架

1. 語言：Javascript
2. Framework：React.js
3. UI Framework: Material UI
4. 樣式語言: sass

### 如何執行此專案

1. 先查看專案結構

2. 查看 UI/UX 每個轉跳的動作

3. 先執行下半部的工作篩選功能

4. 最後做上半部人物眼球移動功能使用 sin 與 cos 計算浮動

### 專案架構、邏輯說明

```textile
- config                         webpack 設定檔
- public                         靜態文件資料夾
- scripts                        webpack 腳本文件
- src                            原始碼資料夾
    |_ api                       api 呼叫資料夾
    |_ assets                    靜態文件資料夾
    |_ constants                 api 模擬服務資料夾
    |_ router                    react 路由資料夾
    |_ styles                    共用樣式資料夾
    |_ utils                     共用 js 方法資料夾
    |_ views                     頁面資料夾
       |_ home                   首頁頁面資料夾
          |_ index.jsx           首頁頁面
    App.jsx                      初始檔
    App.sass                     初始檔
    index.js                     webpack 進入點初始檔案
    index.sass                   html, body 重製檔案
- tests                          單元測試資料夾
.browserslistrc                  css 前綴字支援設定檔
.editorconfig                    編輯器樣式設定檔
.env.development                 開發環境設定檔
.env.production                  正式環境設定檔
.eslintignore                    程式碼風格忽略設定檔
.eslintrc.js                     程式碼風格設定檔
.gitignore                       git 忽略檔
babel.config.js                  js 轉換 es5 編譯檔
jest.config.js                   單元測試設定檔
package.json                     套件管理設定檔
postcss.config.js                css 前綴字轉換設定檔
README.md                        說明文件
```

## 專案遇到的困難、問題及解決方法

```tex
在剛開始拿到專案時，一開始是有看到人物眼睛怎麼動的比較自然，
後來發現人眼球在移動的時候是有一定的軌跡的，於是根據以前經驗
突然想到以前在玩 p5.js 的時候曾經有算過眼球軌跡怎麼從 cos 與 sin
轉換成位置，在加上 codepen 上面的別人專案與 chatgpt 收集回來的參考
資料先予以實驗，最後在整合回 react 專案上面
```
