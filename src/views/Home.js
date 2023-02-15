import React, { useState, useEffect } from 'react';
import Product from '../components/Product';

const Home = ({addProduct, user}) => {
  const [products, setProducts] = useState([]);

  const showItems = () => {
    return products.map((product) => (
      <Product
        key={product.id}
        product={product}
        addProduct={addProduct}
        user={user}
      />
    ));
  };

  const getItems = async () => {
    const res = await fetch(`http://localhost:5000/api/all_products`);
    const data = await res.json();
    console.log(data);
    if (data.status === 'ok') {
      setProducts(data.posts);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return <div>{showItems()}</div>;
};

export default Home;