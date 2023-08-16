import React from 'react';

const ProductDetail = ({ product, addToCart, updateItem }) => {
  return (
    <div className="product-detail">
      <div className="item">
        <div className="thumb">
          <img src={product.image} alt="" className="templatemo-item" />
          <div className="hover-effect">
            <h6>{product.description}</h6>
          </div>
        </div>
        <h4>
          {product.name}
          <br />
          <span>{product.category}</span>
        </h4>
        <ul>
          <li>{product.quantity}</li>
          <li>{product.price}</li>
        </ul>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={() => updateItem(product)}>Update</button>
      </div>
    </div>
  );
};

export default ProductDetail;
