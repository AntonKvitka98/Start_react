import React, { Component }  from 'react'

class Form extends Component {

    handleUserNameChange =  event => {
        this.setState({
            username: event.target.value
        })
    }

    handleUserComChange =  event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleUserTech =  event => {
        this.setState({
            technolog: event.target.value
        })
    }
    handleSubmit = event => {
       alert (`${this.state.username} ${this.state.comments} ${this.state.technolog }`)
    }

    constructor(props){
        super(props)

        this.state={
           username:'',
            comments: '',
            technolog:'angular'
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input
                        type='text'
                        value={this.state.username}
                        onChange={this.handleUserNameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.handleUserComChange}>
                    </textarea>
                </div>
                <div>
                    <label>Technologies</label>
                    <select value={this.state.technolog} onChange={this.handleUserTech}>
                        <option value='react' >React</option>
                        <option value='angular' >Angular</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default Form