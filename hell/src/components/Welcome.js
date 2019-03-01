import React, {Component} from 'react'

class Welcome extends Component {
  render(){
    const {name, surname} = this.props
    return <h1>Welkome {name}</h1>;
  }
}

export default Welcome
