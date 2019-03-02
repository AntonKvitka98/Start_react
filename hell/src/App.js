import React, { Component } from 'react';
import './App.css';
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import ListName from "./components/ListName";
import styles from './appStyles.module.css';
import './appStyles.css'
import StyleSheets from "./components/StyleSheets";
import Inline from "./components/Inline";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className={styles.sucess}>Success</h1>
          <h1 className='error'>Error</h1>

          {/* <StyleSheets/>
        <Inline/>
         <ListName/>

        <UserGreeting/>
         <ParentComponent/>
       <EventBind/>
         <FunctionClick/>
        <ClassClick />

       <Greet name="A" surname="!!!">
        </Greet>
         <Greet name=", B" surname="!!!">
             <button>Click me</button>
           </Greet>
           <Greet name=", C" surname="!!!"/>

           <Welcome name=", A" surname="!!!"/>
           <Welcome name=", B" surname="!!!"/>
           <Welcome name=", C" surname="!!!"/>

        <Message/>
        <Welcome name = "azam"> </Welcome>
        <Counter />*/}
      </div>
    );
  }
}

export default App;
