import React, { Component } from 'react'
import Nav from './Nav';
import Home from './Home';
import Signup from './Signup';
import Lognin from './Login';
import ToDoList from './ToDoList';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 0
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path='/Login' element={<Lognin />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/ToDoList' element={<ToDoList />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
};
