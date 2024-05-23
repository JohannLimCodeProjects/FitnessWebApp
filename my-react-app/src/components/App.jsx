import React, { useState } from "react";
import Footer from "./Footer"
import Calculator from "./Calculator";
import Header from "./Header";
import Macros from "./Macros";
import "bootstrap/dist/css/bootstrap.min.css";
import IngredientsList from "./IngredientsList";
import Display from "./Display";

function App() {
  return (
    <div>
      <Header/>
      <Display></Display>
      <Footer />
    </div>
  );
}

export default App;
