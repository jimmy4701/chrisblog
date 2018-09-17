import React, { Component } from 'react'

export default class Navbar extends Component {

    state = {

    }

    render(){
        const {color, backgroundColor, height} = this.props
        return(
            <div className="navbar" style={{backgroundColor , height}}>
                <p style={{color}}>BARRE DE NAVIGATION</p>
            </div>
        )
    }
}