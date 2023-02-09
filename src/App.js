import React, { Component } from 'react'
import Nav from './Nav';
import Home from './Home';
import Signup from './Signup';
import Lognin from './Login';
import ToDo from './ToDo';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      myList: []
    }
  }
  addToDo = (e) => {
    e.preventDefault();
    const text = e.target.myText.value
    this.setState({ myList: this.state.myList.concat([text]) })
  };
  deleteToDo = (indexToDelete) => {
    const copy = [...this.state.myList]
    copy.splice(indexToDelete, 1)
    this.setState({myList: copy})
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path='/Login' element={<Lognin />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/todo' element={<ToDo myList={this.state.myList} handleToDoSubmit={this.addToDo} deleteToDo={this.deleteToDo}/>} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
};
