import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
	
    constructor(props) {
		super(props);
	    this.state={data:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"}
	};
	    
 
    render() {
    	return(
    		<div id="main">
		<button id="click" onclick={()=>{<p id="para">{this.state.data}</p>}}>click</button>
                

				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;

