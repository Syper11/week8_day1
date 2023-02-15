import React from 'react';

const Shop = ({ item, removeProduct }) => {
  const handleClick = () => {
    removeProduct(item);
    console.log(item, "product handle click");
  };

  const { item_name, img_url, price } = item;

  return (
    <div id="sale_post" className="row">
      <div id="ind_cards" className="card" style={{ width: "18rem" }}>
        <img src={img_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item_name}</h5>
          <p className="card-text">${price}.00</p>
          <button onClick={handleClick}>remove from cart!</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;