/*
 * @Author: fg
 * @Date: 2022-05-26 19:39:46
 * @LastEditors: fg
 * @LastEditTime: 2022-06-10 15:26:21
 * @Description: jsx
 */
import React from 'react';

function Element(){
  return (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );
}
function ElementJsx(){
  return (
    React.createElement(
      'h1',
      {className: 'greeting'},
      'Hello, world jsx!'
    )
  );
} 
export {
  Element,
  ElementJsx
}
