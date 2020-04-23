import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./TopBar.css"

export default class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className = "topbar">
                <div className = "topbar__text">
                    endangered audubons
                </div>
                <div className = "topbar__bar">
                    {/* convert these to <link> routers later */}
                    <Link className = "topbar__link" to="/">Home</Link>
                    <Link className = "topbar__link" to="/birds">Birds</Link>
                    <Link className = "topbar__link" to="conservation/">Conservation</Link>
                    <Link className = "topbar__link" to="/about">About</Link>

                </div>
            </div>
        )
    }
}
