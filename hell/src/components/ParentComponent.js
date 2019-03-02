import React, {Component} from 'react'
import ChileComponent from "./ChileComponent";

class ParentComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert('Hello'  + ' ' + this.state.parentName + ' ' + 'from' + ' ' + childName)
    }

    render(){
        return (
            <div>
                <ChileComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
