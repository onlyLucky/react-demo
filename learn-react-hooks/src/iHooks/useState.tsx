/*
 * @Author: fg
 * @Date: 2022-08-18 10:44:37
 * @LastEditors: fg
 * @LastEditTime: 2022-08-18 13:36:26
 * @Description: useState
 */
import React, { useState } from "react";

// 给定初始化值情况下可以直接使用
const UseStateEg = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> click me </button>
    </div>
  );
};

export default UseStateEg;
