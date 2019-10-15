# mxfe-start-kit (with mock server)

資料夾結構檔案請參考 [directoryList.md](directoryList.md)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build:prod
```

### Lints and fixes files
```
npm run lint
```

### mock api server ( port 3889 )
```
cd server
npm run start
```

### Storybook ( port 6006 )
```
npm run storybook:serve
```

## Auto generator (PLOP)
- First of all, If you want to use this feature, you should install plop.js in your environment globally:

```bash
npm install -g plop
```

- Basic usage:

Change your command line to root folder and enter "plop" and follow the hint from selector

```bash
plop

// ... then you can generate as follow
❯ component - ui component
  view - page view component
  api - generate api
  form - generate api form
  store - generate store module
```

You can enter step by step, or just enter at once

```bash
// component
plop component user
```

### Generate component:

```bash
plop component <name>

// example:
// user
plop component user
```

It will generate file in:
```bash
✔  ++ /src/components/User/index.vue
```

### Generate view:

```bash
plop view <name>

// example:
// account
plop view account
```
It will generate file in:
```bash
✔  ++ /src/views/account/index.vue
✔  ++ /src/router/modules/account.js
✔  ++ /src/router/index.js // if you had not router index file
✔  modifyIndexRouter modify src/router/index.js
```

It will modify your router index file, auto import/add to the config:

```javascript
// /src/router/index.js
import account from "@/router/modules/account" // <- auto import

export default new Router({
  routes: [account] // <- auto add to config
})
```

### Generate api:

```bash
plop api <api name> <require name>

// example:
// account
plop view login user 
```
It will generate file in:
```bash
✔  ++ /src/api/login.js
✔  ++ /src/utils/http/index.js // if you had not router index file
✔  modifyHttpIndex modify src/utils/http/index.js
```

It will modify your http index file, add a new request:

```javascript
// /src/utils/http/index.js
export const loginRequest = req => {
  const serviceApiPrefix = "login"; // auto set your prefix as api name

  return request({
    ...req,
    url: `${serviceApiPrefix}${req.url}`
  });
};
```

### Generate form:

Api form can format your api arguments

```bash
plop form <name> 

// example:
// pager
plop view pager
```
It will generate file in:
```bash
✔  ++ /src/api/forms/PagerForm.js
```

You can use it like below:

```javascript
// /src/api/forms/PageForm.js
import PagerForm from '@/api/forms/PagerForm'

const form = PagerForm.createBase({offset: 0, size: 20})
// use "form" as your api arguments
```

### Generate store module:

```bash
plop store <name>

// example:
// account
plop store auth 
```
It will generate file in:
```bash
✔  ++ /src/store/modules/auth.js
✔  ++ /src/store/index.js // if you had not router index file
✔  modifyStoreIndex modify src/store/index.js
```

It will modify your http index file, add a new request:

```javascript
// /src/store/index
import Vue from 'vue'
import Vuex from 'vuex'

// getters
import getters from './getters'

import auth from "@/store/modules/auth"; // <- auto import

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    auth // <- auto add to config
  },
  getters
})
```

## customize project constructor

You can setting /plop/cust.config.js file to help plop know where you want to put the generated file.

```javascript
// /plop/cust.config.js

module.exports = {
  path: {
    // Common component
    components: "src/components/",

    // Page component binding with router
    views: "src/views/",

    // Frontend api controller
    api: "src/api/",

    // Api form, to table-structured api arguments
    form: 'src/api/forms/',

    // Http request
    http: "src/utils/http/",

    // Common function for specific situation
    utils: "src/utils/",

    // Vue router
    router: "src/router/",

    // Vuex, store.module
    modules: "src/store/",
  },
  ...
};
```
You can change the config file to fit your own project constructor.

*Notice* Make sure the path string close with '/'

## Customize template

Find out /plop/templates and change the template you want.

Follow [Handlebars](https://handlebarsjs.com/) rules
