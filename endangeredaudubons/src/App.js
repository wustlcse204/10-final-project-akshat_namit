import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import TopBar from './topbar/TopBar'
import About from './about/About'
import Birds from './birds/Birds'
import Conservation from './conservation/Conservation'
import "./index.css"
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props);

    state = {
      birbs: []
    }
  }







  render() {
    return (
      <Router>
        <div className = "page">
          <Route exact path = "/" render = {props => (
            <React.Fragment>
            <TopBar></TopBar>
            <div className = "page__container page__container--mainpage">
              <div className = "maintext">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className = "titletext">
                <h1>Endangered<br></br> Audubons</h1>
              </div>
            </div>
            </React.Fragment>
          )}/>
          <Route path = "/birds" component = {Birds}/>
          <Route path = "/conservation" component = {Conservation}/>
          <Route path = "/about" component = {About}/>
        </div>
        
      </Router>
      
    )
  }
}
