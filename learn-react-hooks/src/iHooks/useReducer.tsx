/*
 * @Author: fg
 * @Date: 2022-08-23 17:04:22
 * @LastEditors: fg
 * @LastEditTime: 2022-08-23 17:55:54
 * @Description: useReducer
 */

import React, { useReducer } from "react";

type CountType = {
  count: any;
};

const initialState: CountType = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string }
  | { type: "initial" };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    case "initial":
      return { count: initialState.count };
    default:
      throw new Error("Unknown action");
  }
}

function UseReducerEg() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  );
}

export { UseReducerEg };
