import React, {Component} from 'react'
import RegularCom from "./RegularCom";
import PureComp from "./PureComponent";
import Memo from "./Memo";

class ParentComp extends Component {

    constructor(props){
        super(props)
        this.state= {
          name :'2'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState= {
                name :'Azaza'
            }
        }, 2222)
    }

    render(){
        return (
            <div>
                Parent  Component
                <Memo name={this.state.name}/>
                {/*<RegularCom name = {this.state.name}/>
                <PureComp name = {this.state.name}/>*/}
            </div>
        )
    }
}

export default ParentComp
