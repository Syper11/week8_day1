import React, { Component } from 'react'

export default class extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Brett',
            age: 3000
        }
    }

    happyBirthday = () => {
        this.setState({age: this.state.age + 1})
    }

  render = () => {
    return (
      <div>

        <h1>Home page</h1>
        <h2>This is the home page {this.state.name}</h2>
        <p>{this.state.age}</p>
        <button onClick={this.happyBirthday}>+</button>

        <p>{this.props.testVar}</p>

      </div>
    )
  }
}
