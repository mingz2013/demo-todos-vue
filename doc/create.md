
# 创建项目
                                                                                                                                                           
- 进入当前目录

`⚡ cd demo-todos-vue ` 

- 初始化一个vue项目，用webpack模板

`⚡ vue init webpack .`


```
? Generate project in current directory? Yes
? Project name demo-todos-vue
? Project description A Vue.js project
? Author mingz <305603665@qq.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Pick a test runner jest
? Setup e2e tests with Nightwatch? Yes
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "demo-todos-vue".


# Installing project dependencies ...
# ========================

npm WARN deprecated browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
npm WARN deprecated bfj-node4@5.3.1: Switch to the `bfj` package for fixes and new features!
npm WARN deprecated browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
npm WARN deprecated socks@1.1.10: If using 2.x branch, please upgrade to at least 2.1.6 to avoid a serious bug with socket data flow and an import issue introduced in 2.1.0

> fsevents@1.2.9 install /Users/zhaojm/projects/demo-todos-vue/node_modules/fsevents
> node install

node-pre-gyp WARN Using request for node-pre-gyp https download 
[fsevents] Success: "/Users/zhaojm/projects/demo-todos-vue/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64/fse.node" is installed via remote

> chromedriver@2.46.0 install /Users/zhaojm/projects/demo-todos-vue/node_modules/chromedriver
> node install.js

ChromeDriver binary exists. Validating...
ChromeDriver 2.46.628411 (3324f4c8be9ff2f70a05a30ebc72ffb013e1a71e)

ChromeDriver is already available at '/var/folders/pq/ltwj4_0n45d1rsznpjdv1b180000gn/T/2.46/chromedriver/chromedriver'.
Copying to target path /Users/zhaojm/projects/demo-todos-vue/node_modules/chromedriver/lib/chromedriver
Fixing file permissions
Done. ChromeDriver binary available at /Users/zhaojm/projects/demo-todos-vue/node_modules/chromedriver/lib/chromedriver/chromedriver

> uglifyjs-webpack-plugin@0.4.6 postinstall /Users/zhaojm/projects/demo-todos-vue/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
> node lib/post_install.js

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@2.1.1 requires a peer of ajv@^5.0.0 but none is installed. You must install peer dependencies yourself.

added 1700 packages from 1107 contributors and audited 31705 packages in 60.963s
found 84 vulnerabilities (65 low, 8 moderate, 10 high, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details


Running eslint --fix to comply with chosen preset rules...
# ========================


> demo-todos-vue@1.0.0 lint /Users/zhaojm/projects/demo-todos-vue
> eslint --ext .js,.vue src test/unit test/e2e/specs "--fix"


# Project initialization finished!
# ========================

To get started:

  npm run dev
  
Documentation can be found at https://vuejs-templates.github.io/webpack


```

- 运行测试

`⚡ npm run dev` 



# 使用iview

- 安装iview
`⚡ npm install iview`


- 应用iview

在src/main.js 增加如下代码:
```javascript

import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

```

在components/HelloWorld.vue里面替换如下iview控件：
```html
<Input v-model="value" placeholder="Enter something..." style="width: 300px" />
```

iview应用成功



# 使用vuex



