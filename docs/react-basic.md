<div align="center">
  <h1>react-basic</h1>
  <p>react 基础使用笔记文档</p>
</div>

## 目录

1. [简介](#简介)


## 简介

## JSX

**JSX 防止注入攻击**

React DOM 在渲染所有输入内容之前，默认会进行转义。

**JSX 表示dom对象**
> Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。

这里像react和vue框架像个基座，babel更像是为此准备的dom plugin进行转译渲染

以下两种示例代码完全等效：

```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

React.createElement() 会**预先执行一些检查**，以帮助你编写无错代码，但实际上它创建了一个这样的对象：

```js
// 注意：这是简化过的结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```