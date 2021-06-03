import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route, Router} from 'react-router-dom';
import CartScreen from './screen/CartScreen';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  return (
    <BrowserRouter>
    <div>
      <div className="grid-container">
      <header className="row">
        <div>
          {/* <a className="brand" href="/">amazona</a> */}
          <Link className="brand" to="/">
            amazona
          </Link>
        </div>
        <div>
          {/* <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a> */}
          <Link to="/cart">
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id"component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">All right reserved</footer>
      </div>
    </div>
    </BrowserRouter>
 );
}

export default App;
