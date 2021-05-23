import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
	const[data,setdata]=usestate("p")
    constructor(props) {
		super(props);
	    
	};
	    
 apple(){
  setdata("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
 
 }
    render() {
    	return(
    		<div id="main">
		<button id="click" onclick={()=>{apple()}}> on click</button>
                <p id="para">{data}<p>

				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;

