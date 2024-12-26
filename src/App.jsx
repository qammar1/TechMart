import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Model from "./components/Model";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<Default />} />
      </Routes>
      <Model/>
    </React.Fragment>
  );
}

export default App;
