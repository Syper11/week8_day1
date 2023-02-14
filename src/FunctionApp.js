import React, { useState } from 'react';
import Nav from './Nav';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import ToDo from './views/ToDo';
import Cart from './views/Cart';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

export default function App() {
    const [myList, setMyList] = useState([]);
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    const logMeIn = (user) => {
        setUser(user)
    };
    const logMeOut = () => {
        setUser({})
    };

    const addToDo = (e) => {
        e.preventDefault();
        const text = e.target.myText.value;
        setMyList([...myList, text]);
    };

    const deleteToDo = (indexToDelete) => {
        const copy = [...myList];
        copy.splice(indexToDelete, 1);
        setMyList(copy);
    };

    const addProduct = (product) => {
        setCart([...cart, product]);
    };

    const removeProduct = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const handleDeleteAll = () => {
        setCart([]);
    };

    return (
        <BrowserRouter>
            <div>
                <Nav user={user} logMeOut={logMeOut} />
                <Routes>
                    <Route path='/Login' element={<Login logMeIn={logMeIn} />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/todo' element={<ToDo myList={myList} handleToDoSubmit={addToDo} deleteToDo={deleteToDo} />} />
                    <Route path='/' element={<Home addProduct={addProduct} />} />
                    <Route path='/Cart' element={<Cart items={cart} removeProduct={removeProduct} handleDeleteAll={handleDeleteAll} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}