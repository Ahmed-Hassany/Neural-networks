import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <h4 className="type-logo">Neural Networks</h4>
                <button>About</button>
                <button>Contact us</button>
            </div>
        )
    }
}
