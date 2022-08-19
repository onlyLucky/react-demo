/*
 * @Author: fg
 * @Date: 2022-08-18 17:33:02
 * @LastEditors: fg
 * @LastEditTime: 2022-08-19 15:28:43
 * @Description: useEffect
 */
import React, { useState, useEffect } from "react";

function UseEffectEg() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]); // 仅在 count 更改时更新

  return (
    <div>
      <p>count now is {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props;
  useEffect(() => {
    const timer = setTimeout(() => {
      // todo:
    }, timerMs);
    // 可选
    return () => clearTimeout(timer);
  }, [timerMs]);
}

//
function UseEffectAsync() {
  useEffect(() => {
    (async () => {
      const { data } = await ajax(params);
    })();
  }, [params]);
  // 或者 then 也是可以的
  useEffect(() => {
    ajax(params).then(({ data }) => {
      // todo
    });
  }, [params]);
}

export { UseEffectEg };
