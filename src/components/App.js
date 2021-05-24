import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
	
    constructor(props) {
		super(props);
	     this.state = { isClicked: false };

  }
      this.printPara = () => {

    this.setState({ isClicked: true });
	};
	    
 
    render() {
    	return(
    		<div id="main">
		<button id="click" onclick={this.printPara}>click</button>
 {this.state.isClicked ? (

          <para>

            Hello, I've learnt to use the full-stack evaluation tool. This makes

            me so happy

          </para>

        ) : null}
                

				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;

