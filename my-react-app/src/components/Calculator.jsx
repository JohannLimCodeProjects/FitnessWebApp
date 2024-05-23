import React from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

function Calculator({calculate,ingredientData,databaseQuery}) {

  function createTableRow(queryItem){
    return (
      < TableRow id={queryItem.name} val2 = {queryItem.protein_g} val3={queryItem.fat_total_g} val4 = {queryItem.carbohydrates_total_g}/>
    )
  }

  const tableValues = (
      <div style={{paddingTop: '20px'}}>
        <table>
          <thead>
            <TableHeader val1="Calories" val2="Protein (g)" val3 = "Fat (g)" val4 = "Carbs (g)"/>
          </thead>
          <tbody>
            {databaseQuery.map(createTableRow)}
          </tbody>
        </table>
      </div>
    );

  if (calculate === 1){
    return tableValues;
  } else {
    return null
  }
}

export default Calculator;
