import React, { Component } from 'react'
import TopBar from '../topbar/TopBar'
import "./Conservation.css"
import "../index.css"


export default class conservation extends Component {
    render() {
        return (
            <div className = "page">
                <TopBar></TopBar>
                <div className="triangle"></div>
                <div className = "page__container page__container--conservation">
                    <div className = "titletext titletext--conserve">
                        <h1>Conservation</h1>
                    </div>
                 </div>
            </div>  
        )
    }
}
