/*
 * @Author: fg
 * @Date: 2022-06-10 13:48:11
 * @LastEditors: fg
 * @LastEditTime: 2022-06-10 14:52:47
 * @Description: if
 */
import React from 'react'
function UserGreeting(props){
  return <h1>welcome back</h1>
}
function GuestGreeting(props){
  return <h1>please sign up</h1>
}
function Greeting(props){
  const isLoggedIn = props.isLoggedIn
  if(isLoggedIn){
    return <UserGreeting/>
  }
  return <GuestGreeting/>
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props){
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: false}
  }
  handleLoginClick(){
    this.setState({
      isLoggedIn: true
    })
  }
  handleLogoutClick(){
    this.setState({
      isLoggedIn: false
    })
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return(
      button
    )
  }
}

function WarningBanner(props) {
  if (!props.warn) {
    return false;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class IfPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}



export {
  Greeting,
  LoginControl,
  IfPage
}