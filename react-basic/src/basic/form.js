/*
 * @Author: fg
 * @Date: 2022-06-10 16:26:15
 * @LastEditors: fg
 * @LastEditTime: 2022-06-10 17:49:13
 * @Description: 表单
 */

import React from 'react'

class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }
  handleSubmit(event){
    console.log('value: ',this.state.value)
    event.preventDefault()
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

class TextareaForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
    }

  }
  handleChange=(event)=>{
    this.setState({
      value: event.target.value
    })
  }
  handleSubmit=(event)=>{
    console.log('textarea:', this.state.value)
    event.preventDefault()
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea  type="text" value={this.state.value} onChange={this.handleChange} ></textarea>
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}


class SelectForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: 'coconut'}
  }
  handleChange=(event)=>{
    this.setState({
      value: event.target.value
    })
    console.log(event,this.state.value)
  }
  render(){
    return(
      <label>
        选择你喜欢的风味:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select>
      </label>
    )
  }
}

class Reservation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(event){
    const target = event.target
    const value = target.name === 'isGoing'? target.checked: target.value
    const name = target.name
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }
  render(){
    return(
      <form>
        <label>
          参与：
          <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}></input>
        </label>
        <label>
          来宾人数：
          <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange}></input>
        </label>
      </form>
    )
  }
}

export{
  NameForm,
  TextareaForm,
  SelectForm,
  Reservation
}