---
nav:
  title: 快速上手
  order: 1
---

# 快速上手

## 安装(等待发布)

**使用 npm 或 yarn 安装**

```shell
npm install hl-ui
```

```shell
yarn add hl-ui
```

## 示例

```js
import Alert from 'hl-ui/es/alert'; // 手动按需加载 js
import '/hl-ui/es/alert/style'; // 手动按需加载 less

ReactDOM.render(<Alert kind="warning">这是一条警告提示</Alert>, mountNode);
```
