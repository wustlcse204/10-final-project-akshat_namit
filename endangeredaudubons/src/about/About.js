import React, { Component } from 'react'
import TopBar from '../topbar/TopBar'
import "../index.css"
import "./About.css"

export default class about extends Component {
    render() {
        return (
            <div className = "page">
                <TopBar></TopBar>
                <div className="triangle"></div>
                <div className = "page__container page__container--about">
                    <div className = "abouttext">
                        <p>
                        Endangered Audubons is an archive showcasing the wildlife artwork of John James Audubon; specifically, his work depicting endangered bird species in the United States. 
                        <br></br>
                        <br></br>
                        Birds of all species are on the decline in the United States. Seeing this, it appears to be a good time to revive this well-known American artist’s work in order to spread awareness of endangered species in an aesthetically pleasing manner. Quotes from Audubon’s field notes are accompany some fast facts of each bird from different regions in the country.
                        <br></br>
                        <br></br>
                        Thanks for visiting!
                        <br></br>
                        <br></br>
                        Information sources: Audubon.org; U.S, Fish and Wildlife Service.
                        </p>
                    </div>
                    <div className = "titletext titletext--about">
                        <h1>About</h1>
                    </div>
                 </div>
            </div> 
        )
    }
}
