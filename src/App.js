
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import ProductLanding from './components/ProductLandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';



function App() {

  // setting state for maintaining the order item throught out the website
  // const [orderItems, setOrderItems] = useState([])
  // <Test/>
  // return (
  //   <div className="App">
  //     <Header />
  //     <Products orderItems={orderItems} />
  //   </div>

  // );

  return (

    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductLanding />} />
        </Routes>
{/* <CartPage/>*/}
        {/* <CheckoutPage/> */}
      </div>
    </Router>


  )
}

export default App;
