import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Components/Home';
import Products from './Components/Products';
import  About from './Components/About';
import Contact from './Components/Contact';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Product from './Components/Product';
import Cart from './Components/Cart';

import { Provider } from 'react-redux';
import store from './Components/redux/store';
import Checkout from './Components/Checkout';
const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <Provider store={store}>
      <App/>
      </Provider>
    },
    {
      path:"/products",
      element:
      <Provider store={store}>
      <Products/> 
      </Provider>   
    },
    {
       path:"/about",
       element:
       <Provider store={store}>
       <About/> 
       </Provider> 
    },
    {
       path:"/contact",
       element:
       <Provider store={store}>
       <Contact/> 
       </Provider> 
    },
    {
      path:`/products/:id`,
      element:
      <Provider store={store}>
      <Product/> 
      </Provider> 
    },
    {
      path:"/cart",
      element:
      <Provider store={store}>
      <Cart/> 
      </Provider> 
    },

    
    {
      
      path:"/checkout",
      element:
      <Provider store={store}>
      <Checkout/> 
      </Provider> 

    }

  ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< RouterProvider router={appRouter}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

