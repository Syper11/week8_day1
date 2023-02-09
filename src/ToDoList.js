import React, { Component } from 'react'
import CheckboxList from './components/CheckboxList'

export default class ToDoList extends Component {
  render() {
    return (
      <div>ToDoList
        <CheckboxList/>
      </div>
    )
  }
}
