import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import ProductDetails from './ProductDetails';

const Navbar = ({ products, addToCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const updateItem = (item) => {
    console.log(`Updating ${item.name}`);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    setFilteredProducts(filteredProducts);
  };

  return (
    <>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <img src={logo} alt="" />
                </a>
                <div className="search-input">
                <form id="search" action="#">
                  <input
                    type="text"
                    placeholder="Type Something"
                    id="searchText"
                    name="searchKeyword"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <i className="fa fa-search"></i>
                </form>
              </div>                
                <ul className="nav">
                  <li><a href="index.html" className="active">Home</a></li>
                  <li><a href="">Browse</a></li>
                  <li><a href="details.html">Details</a></li>
                  <li><a href="streams.html">Streams</a></li>
                  <li><a href="profile.html">Profile <img src="" alt="" /></a></li>
                  <li><a href="#" onClick={toggleCart}>Cart</a></li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          addToCart={addToCart}
          updateItem={updateItem}
        />
      )}
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-content">
            <h3>Your Cart</h3>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
