import React, { Component } from 'react'

import './NNMain.css'
import Brain from './Brain/Brain'
import NavBar from './NavBar/NavBar'
import ANN from './Sections/ANN'

// const sectionTitles = ["Artificial Neural Network (ANN)","Convolutional Neural Network (CNN)","Recurrent Neural Network (RNN)"]

export default class NNMain extends Component {
    state = {
        sectionTitle:null
    }

    changeSectionHandler = (sectionIndex)=>{
        this.setState({
            sectionTitle:sectionIndex
        })
    }

    render() {
        let section;
        switch(this.state.sectionTitle)
            {
                case 0:
                section=<ANN/>
                break;
                default:
                section=null
            }
        return (
            <div className="NNmain">
                <div className="Brain-parts">
                    <NavBar/>
                    <Brain changeSection={this.changeSectionHandler} activeSection={this.state.sectionTitle} />
                </div>
                <div className="NN-contents">
                    {/* <h3 className={"sectionTitle-"+this.state.sectionTitle + " sectionTitle"}>{sectionTitles[this.state.sectionTitle]}</h3> */}
                    {section}
                </div>
            </div>
        )
    }
}
