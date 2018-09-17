import React, { Component } from 'react'
import Navbar from '/imports/components/Navbar'

export default class Landing extends Component {
    
    state = {
        title: "Chris Blob",
        description: "Le blog de Chris",
        age: 27
    }

    birthday = () => this.setState({age: this.state.age + 1})

    handleChange = (e) => this.setState({
        [e.target.name]: e.target.type == "number" ? parseFloat(e.target.value) : e.target.value
    })
    
    render(){
        const { title, description, age, navbar_background, navbar_color, navbar_height } = this.state
        const { color = "red" } = this.props
        
        return(
            <div>
                <Navbar 
                    color={navbar_color} 
                    backgroundColor={navbar_background} 
                    height={navbar_height} 
                />
                <h1 style={{color: color}}>{title}</h1>
                <p>{description}</p>
                <p>Chris est un jeune développeur de {age} ans</p>
                <button onClick={this.birthday}>Joyeux anniversaire !</button>
                <form>
                    <input type="text" name="title" value={title} onChange={this.handleChange} />
                    <input type="text" name="description" value={description} onChange={this.handleChange} />
                    <input type="number" name="age" value={age} onChange={this.handleChange} />
                    <input placeholder="color" type="text" name="navbar_color" value={navbar_color} onChange={this.handleChange} />
                    <input placeholder="background" type="text" name="navbar_background" value={navbar_background} onChange={this.handleChange} />
                    <input placeholder="height" type="text" name="navbar_height" value={navbar_height} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}