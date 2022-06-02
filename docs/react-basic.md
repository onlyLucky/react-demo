<div align="center">
  <h1>react-basic</h1>
  <p>react 基础使用笔记文档</p>
</div>

## 目录

- [目录](#目录)
- [简介](#简介)
- [JSX](#jsx)
- [元素渲染](#元素渲染)
- [组件&Props](#组件props)
- [State&生命周期](#State&生命周期)
- [事件处理](#事件处理)

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

假设你的 HTML 文件某处有一个 `<div>`：

```html
<div id="root"></div>
```

这个就是根 DOM 节点，它里面的元素是受框架控制的

- 更新已渲染的元素

  大多数 React 应用只会调用一次 ReactDOM.render()。

- React 只更新它需要更新的部分

  React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。

## 组件&Props

> 组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

- 函数组件&class 组件

下面是一个简单的函数组件

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

函数传参 props 外界调用传递过来，返回一个 React 元素

下面是一个 class 组件

```js
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

我们在`App.js`里面进行引用

```js
<Welcome name="Welcome"></Welcome>
<WelcomeClass name="WelcomeClass"></WelcomeClass>
```

在这个过程中:

- `React`调用组件传入 props-->
- 组件返回一个 React 元素值-->
- `React DOM`进行元素比较进行 diff 更新

  > **注意：组件名称必须以大写字母开头。**
  >
  > 每个新的 React 应用程序的顶层组件都是 App 组件,App 组件内部由不同的组件进行搭配组合

- **Props 的只读性**

**所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。**
纯函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。

## State&生命周期

- 函数组件更改为 class 组件,props 的使用替换为 state 的使用

```js
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

更改为

```js
class Clock extends React.Component {
  name = "";
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.name = "#####";
  }

  render() {
    return (
      <div>
        <h1>Hello, world!{this.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

借用`React.Component` api 使用继承，通过 constructor 接受 props，设置全局 state 对象储存自己的内部变量（props 之所以不能进行改变，纯函数的概念。state 的出现是为了添加内部环境变脸的更改，**在这个 state，我们可以使用其他的变量名称，比如 name**）

- 生命周期方法添加

[生命周期结构图](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

> 其中生命周期需要经历挂载-->更新-->卸载(下面加粗为常用，按照顺序进行)

**挂载过程**

- [**constructor()**](https://react.docschina.org/docs/react-component.html#constructor)
- [static getDerivedStateFromProps()](https://react.docschina.org/docs/react-component.html#static-getderivedstatefromprops)
- [**render()**](https://react.docschina.org/docs/react-component.html#render)
- [**componentDidMount()**](https://react.docschina.org/docs/react-component.html#componentdidmount)

**更新**

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- [**componentDidUpdate()**](https://react.docschina.org/docs/react-component.html#componentdidupdate)

**卸载**

- [**componentWillUnmount()**](https://react.docschina.org/docs/react-component.html#componentwillunmount)

**错误处理**

> 当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

- static getDerivedStateFromError()
- componentDidCatch()

**正确地使用 State**

- 不要直接修改 State
- State 的更新可能是异步的

```js
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}));
```

- State 的更新会被合并

- 数据是向下流动的

组件可以选择把它的 state 作为 props 向下传递到它的子组件中(这对于自定义组件同样适用)

```js
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```

## 事件处理

> - React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
> - 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串

例如，传统的 HTML：

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

在 React 中略微不同：

```js
<button onClick={activateLasers}>Activate Lasers</button>
```

**React 不能通过返回 false 的方式阻止默认行为,必须显式的使用 preventDefault, `e.preventDefault()`**

e 是一个合成事件,React 根据 W3C 规范来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。

```js
lass Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

如果不想使用 bind 进行更改 this 的话可以使用箭头函数

```js
handleClick = () => {
  this.setState((state) => ({
    isToggleOn: !state.isToggleOn,
  }));
};
```

onClick 回调函数也可以使用回调解决 this 的问题

```js
<button onClick={() => this.handleClick()}>Click me</button>
```

**事件如何传递参数**

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## 条件渲染
