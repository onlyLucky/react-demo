/*
 * @Author: fg
 * @Date: 2022-06-01 09:41:15
 * @LastEditors: fg
 * @LastEditTime: 2022-06-01 11:16:08
 * @Description: state&生命周期
 */

import React from 'react'

class Clock extends React.Component{
  // name = "";
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.name = "#####";
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
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
export {
  Clock
}