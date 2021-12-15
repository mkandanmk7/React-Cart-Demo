import React from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import "./app.css";

const App = () => {
  return (
    <div className="MainContainer">
      <Navbar />
      <ProductList />
    </div>
  );
};

export default App;
