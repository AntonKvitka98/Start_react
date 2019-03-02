import React, { Component } from 'react';
import Counter from "./Counter";
import Greet from "./Greet";
import Welcome from "./Welcome";
import FunctionClick from "./FunctionClick";
import ClassClick from "./ClassClick";
import EventBind from "./EventBind";
import ParentComponent from "./ParentComponent";
import UserGreeting from "./UserGreeting";



class NameList extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggeIn: true

        }
    }


    changeMessage(){
        this.setState({
            isLoggeIn : !this.state.isLoggeIn
        })
    }

    render(){


            let message
         if(this.state.isLoggeIn){
             message = <div>
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


                 <Welcome name = "azam"> </Welcome>
                 <Counter />
                 <button onClick = {() => this.changeMessage()}>UnSubscribe!!ssss!!!</button>
             </div>

         }else {
             message =  <div><div>Welcome guest</div>
                 <button onClick = {() => this.changeMessage()}>UnSubscribe!!!!!</button>
             </div>

         }
         return (
             message
         )

    }
}

export default NameList
