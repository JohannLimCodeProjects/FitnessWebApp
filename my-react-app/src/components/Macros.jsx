import React, { useState } from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const Macros = () => {

  const exampleUsage = (
    <p>
      <ol>
        <li>Enter your desired macro targets for Protein, Fat and Carbs</li>
        <li>In the form below, enter a list of ingredients you wish to have in your diet</li>
        <li>Calculate, and find the optimal gram amounts of each ingredient to fit your plan</li>
      </ol>
    </p>
  )

  return (
    <div>
      <div className="appHeader">
        <h2 className="introText"> Enter macro targets for the calculation:</h2>
          <div className="appAbout">
            {exampleUsage}
          </div>
      </div>
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

