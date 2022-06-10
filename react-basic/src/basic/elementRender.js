/*
 * @Author: fg
 * @Date: 2022-05-26 19:56:46
 * @LastEditors: fg
 * @LastEditTime: 2022-05-31 18:55:58
 * @Description: 元素渲染
 */
import ReactDOM from 'react-dom/client';
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);