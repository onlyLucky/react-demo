// import logo from './logo.svg';
// import './App.css';
import {Element,ElementJsx} from './basic/jsx'
import {Welcome,WelcomeClass} from './basic/components'
import {Clock} from './basic/state'
import {Toggle} from './basic/event'
import {Greeting,LoginControl,IfPage} from './basic/if'
function App() {
  return (
    <div className="App">
      {/* jsx */}
      <Element></Element>
      <ElementJsx></ElementJsx>
      <Welcome name="Welcome"></Welcome>
      <WelcomeClass name="WelcomeClass"></WelcomeClass>
      <Clock></Clock>
      <Toggle></Toggle>
      <h3>条件判断</h3>
      <Greeting isLoggedIn={true}/>
      <LoginControl/>
      <IfPage/>
    </div>
  );
}

export default App;
