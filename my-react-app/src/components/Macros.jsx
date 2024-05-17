import React, { useState } from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const Macros = () => {

  // var macroRow = document.getElementById("macroInput")
  // var protein = macroRow.getAttribute("id")

  var Total = (5 * 4) + (5 * 9) + (5 * 4)




  return (
    <div>
      <table>
        <thead>
          <TableHeader id = "macroHeader" val1="Macros" val2="Protein" val3="Fat" val4="Carbs"></TableHeader>
          <TableRow id = "macroInput" val2 ="0" val3="0" val4="0"></TableRow>
        </thead>
      </table>
    </div>
  );
}

export default Macros;
