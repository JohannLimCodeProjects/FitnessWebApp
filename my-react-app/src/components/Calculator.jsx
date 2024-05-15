import React from "react";
import TableRow from "./TableRow";

function Calculator() {
  return (
    <div style={{paddingTop: '20px'}}>
      <table>
        <thead>
          <TableRow ingredientName="Ingredient" protein="Protein" fat = "Fat" carbs = "Carbs"/>
        </thead>
        <tbody>
          <TableRow ingredientName="Chicken" protein="16g" fat="0.3g" carbs="4g"/>
          <TableRow ingredientName="Beef" protein="16g" fat="0.3g" carbs="3g"/>
          <TableRow ingredientName="Rice" protein="2g" fat="0.3g" carbs="20g"/>
          <TableRow ingredientName="Spinach" protein="0g" fat="0.3g" carbs="2g"/>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
