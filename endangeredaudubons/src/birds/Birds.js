import React, { Component } from 'react'
import TopBar from '../topbar/TopBar'
import "../index.css"
import "./Birds.css"

export default class birds extends Component {


    

    testAPI() {
        console.log("hello");

        fetch()





    };


    componentDidMount() {
        this.testAPI();
    }



    render() {
        return (
            <div className = "page">
                <TopBar></TopBar>
                <div className = "page__container page__container--birds">
                    <div className = "testContainer">
                        <div className = "testImg">
                            <img alt = "hey"></img>
                        </div>
                        <div className = "testInfo">
                            <div className = "testInfo__facts">
                                hey
                            </div>
                            <div className = "testInfo__quote">
                                nope
                            </div>
                        </div>
                    </div>
                 </div>
            </div>  
        )
    }
}
