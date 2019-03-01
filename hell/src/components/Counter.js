import React, { Component } from 'react';

 class Counter extends Component{

     constructor(props) {
         super(props)

         this.state={
          count: 0
         };}

    add(){

         // this.setState({
         //     count: this.state.count +1
         // });
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    };

     del(){

         this.setState({
             count: this.state.count -1
         });
     };


     addd(){
         this.add()
         this.add()
         this.add()
         this.add()
          };

  render() {
    return (
      <div>
       <div>Count - {this.state.count}</div>
          <button onClick={() => this.addd()}>+</button>
          <button onClick={() => this.del()}>-</button>
      </div>
    );
  }
}

export default Counter
