import React from 'react';

export default function Product({product, addProduct, user}) {
  const addToCartAPI = async () => {
    
    if (user.apitoken){
      const url = (`http://localhost:5000/api/cart/add`);
      const options = {
        method:"POST",
        body: JSON.stringify({'productId': product.id}),
        
        headers:{
          'content-Type':'application/json',
          Authorization: `Bearer ${user.apitoken}`
        }
      }
      
    

      const res = await fetch(url, options)
      const data = await res.json();
      if (data.status === 'ok'){
        console.log(data)
      }
      
      
        
    }
  };

  return (
    <div id="sale_post" className="row">
      <div id="ind_cards" className="card" style={{ width: "18rem" }}>
        <img src={product.img_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.item_name}</h5>
          <p className="card-text">${product.price}.00</p>
          <button className='btn btn-primary' onClick={()=>{addProduct(product); addToCartAPI()} }>Add To cart!</button>
        </div>
      </div>
    </div>
  );
}
