import React from "react";

function TableRow(props) {
  return (
    <table>
      <td contentEditable="true"> {props.ingredientName} </td>
      <td contentEditable="true"> {props.protein} </td>
      <td contentEditable="true"> {props.fat} </td>
      <td contentEditable="true"> {props.carbs} </td>
    </table>
  );
}

export default TableRow;
