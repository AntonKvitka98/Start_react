import React, {Component} from 'react'

class LifeCycleB extends Component {
    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    constructor(props){
        super(props)
        this.state = {
            name : 'Azam'
        }
        console.log('LifeCycleB constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    getSnapshotBeforeUpdate() {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate')
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }

    render(){
        console.log('LifeCycleB render')
        return (
            <div>
                B
            </div>
        )
    }
}

export default LifeCycleB