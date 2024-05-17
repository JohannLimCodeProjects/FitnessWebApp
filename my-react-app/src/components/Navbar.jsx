import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">Calorie Calculator</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#Macros">Macros</a>
            <a class="nav-item nav-link" href="#Ingredients">Ingredients</a>
            <a class="nav-item nav-link" href="#calculator">Calculator</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
