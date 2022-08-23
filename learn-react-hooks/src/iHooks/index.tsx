/*
 * @Author: fg
 * @Date: 2022-07-29 15:45:07
 * @LastEditors: fg
 * @LastEditTime: 2022-08-19 16:56:24
 * @Description: react hooks
 */
import React from "react";
import { Button } from "antd";
import UseStateEg from "./useState";
import { UseEffectEg } from "./useEffect";
import { TextInputWithFocusButton, RefCounter } from "./useRef";
const ReactHooks = () => {
  return (
    <div>
      {/* <h1>Hello</h1>
      <Button>点我</Button> */}
      <UseStateEg></UseStateEg>
      <UseEffectEg></UseEffectEg>
      <TextInputWithFocusButton></TextInputWithFocusButton>
      <RefCounter></RefCounter>
    </div>
  );
};

export default ReactHooks;
