/*
 * @Author: fg
 * @Date: 2022-08-18 10:44:37
 * @LastEditors: fg
 * @LastEditTime: 2022-08-18 17:30:41
 * @Description: useState
 */
import React, { useState } from "react";

// 给定初始化值情况下可以直接使用
type AppProps = { message: string };

const UseStateEg = () => {
  const [count, setCount] = useState(0);
  const [data] = useState<AppProps | null>({
    message: "123",
  });
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> click me </button>
      <br />
      {data && data.message}
      <div>{data?.message}</div>
    </div>
  );
};

export default UseStateEg;
