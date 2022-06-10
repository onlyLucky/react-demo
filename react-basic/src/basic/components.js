/*
 * @Author: fg
 * @Date: 2022-05-31 19:15:18
 * @LastEditors: fg
 * @LastEditTime: 2022-05-31 19:22:40
 * @Description: components
 */
import React from 'react'
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class WelcomeClass extends React.Component{
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export {
  Welcome,
  WelcomeClass
}