// import logo from './logo.svg';
// import './App.css';
import {Element,ElementJsx} from './jsx'
import {Welcome,WelcomeClass} from './components'
import {Clock} from './state'
function App() {
  return (
    <div className="App">
      {/* jsx */}
      <Element></Element>
      <ElementJsx></ElementJsx>
      <Welcome name="Welcome"></Welcome>
      <WelcomeClass name="WelcomeClass"></WelcomeClass>
      <Clock></Clock>
    </div>
  );
}

export default App;
