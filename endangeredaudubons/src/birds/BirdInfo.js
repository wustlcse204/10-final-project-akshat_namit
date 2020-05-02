import React, { Component } from 'react'
import Rodal from 'rodal';
import {database} from '../database.js'
import 'rodal/lib/rodal.css';
import "../index.css"
import "./BirdInfo.css"

export default class birdInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isVertical: false
        }

        this.show = () => {
            this.setState({visible: true})
        }

        this.hide = () => {
            this.setState({visible: false})
        }

        this.styles = {
            overflow: "scroll", 
            padding: "50px", 
            paddingTop: "100px",
            backgroundColor: "#f9f6ef"
        }
    }


    render() {

        const {id, name, taxName, plateNo, status, endangered, info} = this.props.birb;

        const databaseId = id.toString();

        const {bigImg, smallImg, quote} = database[databaseId];
        
        return (
            <React.Fragment>
                <Rodal visible = {this.state.visible} onClose = {this.hide} width = {1250} height = {900}
                 closeMaskOnClick = {true} showCloseButton = {true} duration = {300} customStyles = {this.styles}>
                    <div className = "birdContainer">
                        <div className = "birdName--normal">
                            <h2>{name}</h2>
                        </div>
                        <div className = "birdName birdName--scientific">
                             <h3>{taxName}</h3>
                        </div>
                        <div className = "birdImg">
                            <img src = {bigImg} alt = "hey"></img>
                        </div>
                        <div className = "birdInfo">
                            <div className = "birdInfo__facts">
                                <p><strong>Plate No: </strong>{plateNo}</p>
                                <p><strong>Status: </strong>{status}</p>
                                <p><strong>Endangered In: </strong>{endangered}</p>
                                <br></br>
                                {/* <p><strong>Habitat & Diet: </strong> {this.props.birb.habitatDiet}</p>
                                <br></br>
                                <p><strong>Nesting: </strong>{this.props.birb.nesting}</p> */}
                                <div className = "infoScroll">
                                    <p><strong>Info: </strong>{info}</p>
                                </div>
                            </div>
                            <div className = "birdInfo__quote">
                                <p>{quote}</p>
                            </div>
                         </div>
                     </div>
                </Rodal>

                <div className= "birdContainer--small">
                    <div id="0" className="birdImg--small" onClick = {this.show}>
                        <img src={smallImg} alt = " "></img>
                    </div>
                    <div className = "birdText">
                        <h4>{name}</h4>
                    </div>    
                </div>
                    
                
               
            </React.Fragment> 
        )
    }
}
