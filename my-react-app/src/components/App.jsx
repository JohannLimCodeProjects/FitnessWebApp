import React, { useState } from "react";
import Footer from "./Footer"
import Calculator from "./Calculator";
import NavigationBar from "./Navbar";
import Macros from "./Macros";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavigationBar/>
      <Macros></Macros>
      <Calculator/>
      <Footer />
    </div>
  );
}

export default App;
