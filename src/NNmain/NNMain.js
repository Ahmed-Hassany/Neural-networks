import React, { Component } from 'react'

import './NNMain.css'
import Brain from './Brain/Brain'

const sectionTitles = ["Artificial Neural Network (ANN)","Convolutional Neural Network (CNN)","Recurrent Neural Network (RNN)"]

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
        return (
            <div className="NNmain">
                <div className="Brain-parts">
                    <Brain changeSection={this.changeSectionHandler} activeSection={this.state.sectionTitle} />
                </div>
                <div className="NN-contents">
                    <h3 className={"sectionTitle-"+this.state.sectionTitle + " sectionTitle"}>{sectionTitles[this.state.sectionTitle]}</h3>
                    <p>Ut cupidatat mollit sunt non dolore est. Fugiat elit aliquip excepteur culpa eu eu consequat sit eu tempor. Et eu ea deserunt in est ullamco aliquip quis.</p>
                </div>
            </div>
        )
    }
}
