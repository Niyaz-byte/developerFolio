import React, { Component } from "react";

export default class Counter extends Component {
    
         constructor(){
         super()
         this.goodMorninng = this.goodMorninng.bind(this);
         this.state = {clicks:0 }
        
     }
    goodMorninng() {
        const numberOfClicks = this.state.clicks;
        this.setState({clicks:  numberOfClicks + 1 });
    }

    render() {

        return <button onClick={this.goodMorninng} onDoubleClick={this.click}>{this.state.clicks}</button>
                   
               
    }
    click() {
        let stas = "stas"
        console.log(stas);
    }
}

