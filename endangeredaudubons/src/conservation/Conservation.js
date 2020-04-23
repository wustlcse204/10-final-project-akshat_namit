import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TopBar from '../topbar/TopBar'
import "../index.css"
import "./Conservation.css"

export default class conservation extends Component {
    render() {
        return (
            <div className = "page">
                <TopBar></TopBar>
                <div className = "page__container page__container--conservation">
                    <h1>about</h1>
                 </div>
            </div>  
        )
    }
}
