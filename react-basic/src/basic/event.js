/*
 * @Author: fg
 * @Date: 2022-06-02 10:43:24
 * @LastEditors: fg
 * @LastEditTime: 2022-06-02 11:26:01
 * @Description: 事件处理
 */
import React from 'react'

class Toggle extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isToggleOn: true
    }
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick=()=>{
    this.setState(state=>({
      isToggleOn : !state.isToggleOn
    }))
  }
  render(){
    return(
      <button onClick={this.handleClick.bind(this)}>
        {this.state.isToggleOn?'ON':'OFF'}
      </button>
    )
  }
}
export{
  Toggle
}