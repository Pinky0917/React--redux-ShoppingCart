import './App.css';
import Navbar from "./component/Navbar";
import Cart from './component/Cart';
import Home from "./component/Home";
import Product from "./component/Product";
import Products from "./component/Products";
import { Routes, Route } from "react-router-dom";
// import Switch from "react-dom";

function App() {
  return (
  <>
  
  <Navbar/>
  {/* <Home/>
  <Products />  */}
   {/* <Product/> */}
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/products" element={<Products/>}/>
  <Route exact path="/products/:id" element={<Product/>}/>
  <Route exact path="/cart" element={<Cart/>}/>
  </Routes> 
  </>
  );
}

export default App;
