import React, { Component } from 'react'

export default class Landing extends Component {

    state = {
        title: "Chris Blob",
        description: "Le blog de Chris"
    }

    render(){
        const { title, description } = this.state
        
        return <p>{title} {description}</p>
    }
}