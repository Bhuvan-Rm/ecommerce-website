
import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';


function App() {

  // setting state for maintaining the order item throught out the website
  const [orderItems,setOrderItems] = useState([])
  // <Test/>
  return (
    <div className="App">
        <Header/>
        <Products orderItems={orderItems}/>
    </div>
  );
}

export default App;
