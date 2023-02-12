import React, { Component } from 'react'
import Nav from './Nav';
import Home from './views/Home';
import Signup from './views/Signup';
import Lognin from './views/Login';
import ToDo from './views/ToDo';
import Cart from './views/Cart';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: [],
      cart: []
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

  addProduct = product => {
    this.setState(state => ({
      cart: [...state.cart, product]
    }));
  };

  removeProduct = id => {
    this.setState(state => {
      const newCart = [...state.cart];
      newCart.splice(id, 1);
      return { cart: newCart };
    });
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
            <Route path='/' element={<Home addProduct={this.addProduct}/>} />
            <Route path='/Cart' element={<Cart items={this.state.cart} removeProduct={this.removeProduct}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
};
