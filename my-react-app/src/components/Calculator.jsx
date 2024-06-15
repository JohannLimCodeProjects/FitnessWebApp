import React from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

function Calculator({calculate,ingredientData,databaseQuery}) {

  function createTableRow(queryItem){

    
    return (
      < TableRow itemName={queryItem.name} amount ={queryItem.serving_size_g} val2 = {queryItem.protein_g} val3={queryItem.fat_total_g} val4 = {queryItem.carbohydrates_total_g} type="0"/>
    )
  }

  const tableValues = (
      <div style={{paddingTop: '20px'}}>
        <table>
          <thead>
            <TableHeader id = "calculatorHeader" val1="Macros" val2="Protein" val3="Fat" val4="Carbs" type="0"></TableHeader>
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
