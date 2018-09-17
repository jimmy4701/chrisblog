import React, { Component } from 'react'

export default class Landing extends Component {
    
    state = {
        title: "Chris Blob",
        description: "Le blog de Chris",
        age: 27
    }

    birthday = () => this.setState({age: this.state.age + 1})
    
    render(){
        const { title, description, age } = this.state
        const { color = "red" } = this.props
        
        return(
            <div>
                <h1 style={{color: color}}>{title}</h1>
                <p>{description}</p>
                <p>Chris est un jeune développeur de {age} ans</p>
                <button onClick={this.birthday}>Joyeux anniversaire !</button>
            </div>
        )
    }
}