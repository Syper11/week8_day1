import React from 'react';

const Shop = ({ item, removeProduct, user }) => {
  const removeFromCartAPI = async (item) => {
    const url = 'http://127.0.0.1:5000/api/cart/remove';
    const options = {
      method: 'POST',
      body: JSON.stringify({ 'productId': item.id }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.apitoken}`
      }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    if (data.status === 'ok') {
      console.log(data)
    }
  };

  const handleClick = (item) => {
    removeProduct(item);
    if (user.apitoken) {
      removeFromCartAPI(item)
    }
  };

  return (
    <div id="sale_post" className="row">
      <div id="ind_cards" className="card" style={{ width: "18rem" }}>
        <img src={item.img_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.item_name}</h5>
          <p className="card-text">${item.price}.00</p>
          <button onClick={()=>{handleClick(item)}}>remove from cart!</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;