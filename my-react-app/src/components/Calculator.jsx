import React from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

function Calculator() {
  return (
    <div style={{paddingTop: '20px'}}>
      <table>
        <thead>
          <TableHeader val1="Calories" val2="Protein (g)" val3 = "Fat (g)" val4 = "Carbs (g)"/>
        </thead>
        <tbody>
          <TableRow val1="0" val2="16" val3="0.3" val4="4"/>
          <TableRow val1="0" val2="16" val3="0.3" val4="3"/>
          <TableRow val1="0" val2="2" val3="0.3" val4="20"/>
          <TableRow val1="0" val2="0" val3="0.3" val4="2"/>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
