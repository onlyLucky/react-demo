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

**JSX 表示 dom 对象**

> Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。

这里像 react 和 vue 框架像个基座，babel 更像是为此准备的 dom plugin 进行转译渲染

以下两种示例代码完全等效：

```js
const element = <h1 className="greeting">Hello, world!</h1>;
```

```js
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

React.createElement() 会**预先执行一些检查**，以帮助你编写无错代码，但实际上它创建了一个这样的对象：

```js
// 注意：这是简化过的结构
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};
```

## 元素渲染

React 元素创建开销是极小的普通对象，**React DOM**用来负责 DOM 的更新创建，并保持一致。<br>
这里的元素可以简简单单当成一个组件，构成 react 的组件化<br>

假设你的 HTML 文件某处有一个 <div>：
