import React, { Component } from 'react';
import './App.css';
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind/>
        {/* <FunctionClick/>
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