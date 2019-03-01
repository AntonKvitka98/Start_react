import React, {Component} from 'react'

class ClassClick extends Component {
    clickHandle(){
        console.log('2 clicks')
    }

    render(){
        return (
            <div>
                <button onClick={this.clickHandle}>Click me!</button>
            </div>
        )
    }
}

export default ClassClick
