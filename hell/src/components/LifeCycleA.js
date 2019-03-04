import React, {Component} from 'react'
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    constructor(props){
        super(props)
        this.state = {
            name : 'Azam'
        }
        console.log('LifeCycleA constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Azam'
        })
    }
    render(){
        console.log('LifeCycleA render')
        return (
            <div>
               <div>A</div>
                <button onClick={this.changeState}>Change</button>
                <LifeCycleB/>

            </div>
        )
    }
}

export default LifeCycleA
