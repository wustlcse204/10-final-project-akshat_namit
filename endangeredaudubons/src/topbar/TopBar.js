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
                    <h1>
                    endangered audubons
                    </h1>
                </div>
                <div className = "topbar__bar">
                    <Link className = "topbar__link" to="/"><p className = "link__text">Home</p></Link>
                    <Link className = "topbar__link" to="/birds"><p className = "link__text">Birds</p></Link>
                    {/* <Link className = "topbar__link" to="conservation/"><p className = "link__text">conservation</p></Link> */}
                    <Link className = "topbar__link" to="/about"><p className = "link__text">About</p></Link>

                </div>
            </div>
        )
    }
}
