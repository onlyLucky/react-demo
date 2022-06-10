// import logo from './logo.svg';
// import './App.css';
import {Element,ElementJsx} from './basic/jsx'
import {Welcome,WelcomeClass} from './basic/components'
import {Clock} from './basic/state'
import {Toggle} from './basic/event'
import {Greeting,LoginControl,IfPage} from './basic/if'
import {ListLi,ListBlog} from './basic/list'
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
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
      <h3>列表</h3>
      <ListLi/>
      <ListBlog posts={posts}/>
    </div>
  );
}

export default App;
