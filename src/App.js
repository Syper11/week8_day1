import React, { Component } from 'react'
import Nav from './Nav';
import Home from './Home';
import Signup from './Signup';
import Lognin from './Login';


export default class App extends Component {
  constructor(){
    super();
    this.state ={
      test:0
    }
  }

  render() {
    return (
      <div>
        <Nav />
        {/* <Lognin/> */}
        {/* <Signup/>
        
        <Home/> */}
      
      </div>
    )
  }
};
