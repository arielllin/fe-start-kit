
#資料夾結構 v1.0.0
```
|-- root
    |-- .eslintrc.js
    |-- .gitignore
    |-- README.md
    |-- babel.config.js
    |-- package-lock.json
    |-- package.json
    |-- vue.config.js
    |   
    |-- build (webpack客製化)
    |   |-- webpack.develop.js
    |   |-- webpack.production.js
    |   |-- ...
    |
    |-- config (環境客製化參數)
    |   |-- develop.env.js
    |   |-- production.env.js
    |   |-- ...
    |
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |
    |-- server (測試用Server)
    |   |-- index.js
    |   |-- package-lock.json
    |   |-- package.json
    |
    |-- src 
        |-- App.vue
        |-- main.js (主進入點)
        |-- permission.js (白名單權限管理)
        |
        |-- api (API資料夾)
        |   |-- auth.js
        |   |-- ...
        |
        |-- assets 
        |   |-- icons
        |   |   |-- index.js
        |   |   |
        |   |   |-- svg (svg資料夾)
        |   |       |-- check.svg
        |   |       |-- ...
        |   |   
        |   |-- images
        |       |-- logo.png
        |       |-- ...
        |
        |-- components (共用元件)
        |   |-- HelloWorld.vue
        |   |-- SvgIcon
        |       |-- index.vue
        |
        |-- lang (i18n資料夾)
        |   |-- en-us.js
        |   |-- index.js
        |   |-- zh-cn.js
        |   |
        |   |-- modules (i18n依照router模組化)
        |       |-- about.js
        |       |-- ...
        |
        |-- mixins
        |   |-- i18nHelper.js (i18n 工具)
        |   |-- ...
        |
        |-- router
        |   |-- index.js
        |   |-- modules
        |       |-- help.js
        |       |-- login.js
        |       |-- ...
        |
        |-- store (vuex 狀態管理)
        |   |-- getters.js
        |   |-- index.js
        |   |
        |   |-- modules
        |       |-- app.js
        |       |-- login.js
        |       |-- ...
        |
        |-- utils (工具類)
        |   |-- auth.js
        |   |-- constant.js
        |   |
        |   |-- http
        |       |-- index.js
        |       |-- request.js
        |
        |-- views (頁面類-依照 Router 劃分)
            |-- About.vue
            |-- Help.vue
            |-- Home.vue
            |-- Login.vue
            |
            |-- situation
                |-- 404.vue
```
