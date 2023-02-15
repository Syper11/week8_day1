import React, { useEffect, useState } from 'react';
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


    const cartTotal = () => {
        let total = 0;
        for(let item of cart){
            total += parseFloat(item.price)
        }
        return total.toFixed(2)
    };

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
        setCart({});
    };

    const getCartAPI = async (user) => {
        if (user.apitoken){
            const url = await fetch(`http://localhost:5000/api/cart/get`)
            const options = {
                method: "GET",
                header: {
                Authorization: `Bearer ${user.apitoken}` 
                }
            }

            const res = await fetch()
            const data = await res.json();
            if (data.status === 'ok'){
                setCart(data.cart)
            }

            
        } else {
            setCart([])
        }
    };

    useEffect(()=>{
        getCartAPI(user)
    }, [user])

    return (
        <BrowserRouter>
            <div>
                <Nav user={user} logMeOut={logMeOut} cart={cart} cartTotal={cartTotal}/>
                <Routes>
                    <Route path='/Login' element={<Login logMeIn={logMeIn} />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/todo' element={<ToDo myList={myList} handleToDoSubmit={addToDo} deleteToDo={deleteToDo} />} />
                    <Route path='/' element={<Home addProduct={addProduct} user={user}/>} />
                    <Route path='/Cart' element={<Cart items={cart} removeProduct={removeProduct} handleDeleteAll={handleDeleteAll} user={user}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}