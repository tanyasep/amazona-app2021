import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route, Router} from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screen/CartScreen';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import RegisterScreen from './screen/RegisterScreen';
import SigninScreen from './screen/SigninScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
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
          {
            userInfo ? (
              <div className="dropdown">
                <Link to="#" >
                  {userInfo.name} <i className="fa fa-caret-down"></i> {' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                  <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>

            ) : (
              <Link to="/signin">Sign In</Link>
            )
          }
          
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id"component={ProductScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">All right reserved</footer>
      </div>
    </div>
    </BrowserRouter>
 );
}

export default App;
