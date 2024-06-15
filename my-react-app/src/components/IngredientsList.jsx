import React, { useState } from "react";
import TableRow from "./TableRow";
import "../styles.css"

const IngredientsList = ({count,onClick}) => {

  return (
        <form>
          <div className={"ingredientForm"}>
            <label>List of Ingredients</label>
            <input className="form-control" id="itemList" placeholder="i.e Chicken, Egg, Beef, Spinach"></input>
          </div>
        <button type="submit" className="btn btn-primary mb-2" onClick={onClick}>Calculate</button>
      </form>
  );
}

export default IngredientsList;
