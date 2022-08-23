/*
 * @Author: fg
 * @Date: 2022-08-19 15:30:25
 * @LastEditors: fg
 * @LastEditTime: 2022-08-19 16:55:57
 * @Description: useRef
 */

/* 
useRef 一般用于两种场景

1.引用 DOM 元素；
2.不想作为其他 hooks 的依赖项，因为 ref 的值引用是不会变的，变的只是 ref.current。

*/

import React, { useState, useRef, useEffect } from "react";

function TextInputWithFocusButton() {
  // 初始化为 null, 但告知 TS 是希望 HTMLInputElement 类型
  // inputEl 只能用于 input elements
  const inputEl = React.useRef<HTMLInputElement>(null!);
  const onButtonClick = () => {
    // TS 会检查 inputEl 类型，初始化 null 是没有 current 上是没有 focus 属性的
    // 你需要自定义判断!
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
    inputEl.current?.focus();
  };

  return (
    <>
      <input type="text" ref={inputEl} />
      <button type="button" onClick={onButtonClick}>
        focus this input
      </button>
    </>
  );
}

function RefCounter() {
  const [count, setCount] = useState(0);

  const currentCount = useRef<number | null>();
  // 使用 useEffect 获取当前 count
  useEffect(() => {
    if (currentCount.current) {
      currentCount.current = count;
    }
  }, [count]);

  const alertCount = () => {
    setTimeout(() => {
      alert(
        `current count is: ${currentCount.current}, real count is: ${count}`
      );
    }, 3000);
  };
  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count add</button>
      <button onClick={alertCount}>Alert current Count</button>
    </>
  );
}

export { TextInputWithFocusButton, RefCounter };
