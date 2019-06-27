# aegis-ui

> 基于 Vue 私用组件库 aegis-ui

## 安装

``` 
 npm install aegis-ui -S
```
## 使用

### 完整引入

``` 
import AegisUI from 'aegis-ui'
Vue.use(AegisUI)
```


### 按需引入 

按需加载需要借助<code>babel-plugin-import</code>, 这样就可以只引入需要的组件，以减小项目体积

```shell
npm i babel-plugin-import -D
```

将babel.config.js修改为：

```javascript
module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: true
      },
      'ant-design-vue'
    ]
  ]
};
```

引入组件

```
import { Alert } from "aegis-ui";
@Component({
  components: {
    Alert
  }
})
```

### 开发环境启动
```
npm run dev 
```

### 创建组件
```bash
npm run create <name> <cn-name> <type> 
```

* name为组件名称，格式要求如下：
  * 命名统一使用小写单词，多个单词之间以-分隔
  * ui组件以ae-、d-、m-其中之一开头，ae-表示通用组件，d-表示pc端组件，m-表示移动端组件
  * vue指令或工具类组件按实际作用命名
* cn-name为组件的中文名称
* type 可选ui（ui组件）、directive（vue指令）、tool（工具）

### 自动生成文档

 ```bash
npm run docs
```

### 代码检查
```bash
npm run lint
``` 


### 生产环境打包 

```bash
npm run build
```

> 用于部署，如果发布到npm仓库则不需要执行

### 打包全量文件

```bash
npm run build:components
```

### 删除组件
```
npm run remove <name>
```

* name：要删除的组件名称


### 发布到npm仓库

```bash
npm run publish
```
