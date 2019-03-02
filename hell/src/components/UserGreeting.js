import React, {Component} from 'react'

class UserGreeting extends Component {
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

        return (
            this.state.isLoggeIn ?
                <div><div>Welcome user</div>
                    <button onClick = {() => this.changeMessage()}>Subscribe</button>
                </div>
                :
                <div><div>Welcome guest</div>
                    <button onClick = {() => this.changeMessage()}>UnSubscribe</button>
                </div>
        )

        /*let message
        if(this.state.isLoggeIn){
            message = <div><div>Welcome user</div>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>


        }else {
            message =  <div><div>Welcome guest</div>
                <button onClick = {() => this.changeMessage()}>UnSubscribe</button>
            </div>

        }
        return (
            message
        )*/
    }
}

export default UserGreeting
