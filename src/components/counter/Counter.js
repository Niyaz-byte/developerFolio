import React, { Component } from "react";

export default class Counter extends Component {
    
         constructor(){
         super()
         this.state = { name:"Niiaz", age: 45}
        
     }
    metod() {
        let Hello = "Niiaz"
        console.log(new Date());
    }

    render() {

        return <button onClick={this.metod} onDoubleClick={this.click}>{this.state.name}</button>
                   
               
    }
    click() {
        let stas = "stas"
        console.log(stas);
    }
}

