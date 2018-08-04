import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount(){
    console.log("inside componentWillUnmount method") ;
  }
  componentDidMount(){
    console.log("inside componentDidUnmount method") ;
  }

  render() {
    const test = Math.random()*5 ;
    return (
      <div>
      {
         test < 3 && <div>
        <ul>
          <li>Devyendu</li>
          <li>Ashish</li>
          <li>Ankit</li>
        </ul>
      </div> 
      
    }
    </div>
    
    );

  }
}

export default App;
