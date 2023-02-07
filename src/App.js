import React, { Component } from 'react'
import Nav from './Nav'
import Home from './Home'
import News from './News'

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
        {/* <News></News> */}
        <Home testVar = {this.state.test}/>
        {/* <Content>
          <Feed>
            <Post>

            </Post>
          </Feed>
        </Content> */}


      </div>
    )
  }
};
