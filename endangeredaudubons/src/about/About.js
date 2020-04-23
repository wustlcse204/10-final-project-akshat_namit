import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TopBar from '../topbar/TopBar'
import "../index.css"
import "./About.css"

export default class about extends Component {
    render() {
        return (
            <div className = "page">
                <TopBar></TopBar>
                <div className = "page__container page__container--about">
                    <h1>about</h1>
                 </div>
            </div> 
        )
    }
}
