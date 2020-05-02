import React, { Component } from 'react'
import TopBar from '../topbar/TopBar'
import BirdInfo from './BirdInfo'
import "../index.css"
import "./Birds.css"

export default class birds extends Component {

    testAPI() {
        console.log("hello");

    };


    componentDidMount() {
        this.testAPI();
    }



    render() {
        return (
            <div className = "page">
                <TopBar></TopBar>
                <div className="triangle"></div>
                <div className = "page__container page__container--birds">
                    <div className = "imgContainer"> 
                        {this.props.birbs.map(birb => (
                            <BirdInfo key = {birb.id} birb = {birb}></BirdInfo>
                        ))}
                    </div>
                    <div className = "titletext titletext--birds">
                        <h1>Birds</h1>
                    </div>
                </div>
            </div> 

        //    <BirdInfo></BirdInfo>
        )
    }
}
