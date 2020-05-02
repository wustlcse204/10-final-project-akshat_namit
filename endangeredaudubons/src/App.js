import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {database} from './database.js'
import TopBar from './topbar/TopBar'
import About from './about/About'
import Birds from './birds/Birds'
import Conservation from './conservation/Conservation'
import "./index.css"
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      birbs: []
    }
  }


  render() {
    return (
      <Router>
          <Route exact path = "/" render = {props => (
            // <div className="test-triangle"></div>
            <React.Fragment>
              <div className = "page page--main">
              <TopBar></TopBar>
                <div className = "page__container page__container--mainpage">
                  <div className = "maintext">
                    <p>
                    Welcome to Endangered Audubons. The late John James Audubon became celebrated for his immaculate plein-aire drawings of native birds around the United States. Today, however, many of such bird species are threatened, endangered, or critically endangered. This archive showcases Audubon’s work of such bird species in the hopes of spreading awareness of these animals’ condition and appreciation of Audubon’s artwork.
                    <br></br>
                    Please peruse this site using the navigation.
                    </p>
                  </div>
                  <div className = "titletext titletext--main">
                    <h1>Endangered<br></br> Audubons</h1>
                  </div>
                </div>
            </div>
            </React.Fragment>
          )}/>
          {/* <Route path = "/birds" component = {Birds}/> */}
          <Route path = "/birds" render = {(routeProps) => (
              <Birds {...routeProps} birbs = {this.state.birbs} ></Birds>
          )}/>
          <Route path = "/conservation" component = {Conservation}/>
          <Route path = "/about" component = {About}/>
      </Router>
      
    )
  }

  componentDidMount() {
    fetch("https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export?columns=@sid,cn,sn,status,desc;/species/life_history@desc&filter=/species@gn = 'Birds'&filter=/species@sid in (3232, 6174, 8230, 7614, 2083, 758)&filter=/species@status in ('Endangered', 'Threatened')", {
      method: 'get'
    } ).then(res => (res.json())).then(res_json => {
        let resData = res_json.data;

        // putting JSON data into more usable format

        let birdData = resData.map(element => (
          {
            id: element[0],
            name: element[1].replace(/ *\([^)]*\) */g, ""),
            plateNo: database[element[0]].plateNo,
            taxName: element[2].value,
            status: element[3],
            endangered: element[4],
            info: element[5]
          }
        ));
        
        // trying to identify which items in array are duplicates 
        // first sorting, then checking if next item in list has the 
        // same id -- if they do, then there is a duplicate
        birdData.sort((birdA, birdB) => {
          if (birdA.id < birdB.id) return -1;
          if (birdA.id > birdB.id) return 1;
          return 0;
        })

        let dupBirds = []

        for (let i = 0; i < birdData.length-1; i++) {
          const elem = birdData[i];
          const nextElem = birdData[i+1]

          if (elem.id === nextElem.id) {
            dupBirds.push(nextElem);
          }
        }

        // filtering all the duplicates out by using a set 

        let filteredData = Array.from(new Set(birdData.map(elem => elem.id))).map(id => birdData.find(bird => bird.id === id))

        // for all the items with duplicates, concatenating their information through looping through the no duplicate and duplicate arrays. 
        
        // when ids match, concatenate status and endangered information with commas / semicolons etc
        filteredData.forEach(filterElem => {
          dupBirds.forEach(dupElem => {
              if (filterElem.id === dupElem.id) {
                filterElem.status += ", " + dupElem.status;
                filterElem.endangered += "; " + dupElem.endangered;
              }
            });
          })

        // finally set state with the retrieved and processed information 
        this.setState({
          birbs: filteredData
        })
      }
    )

  }
}
