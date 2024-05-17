import React from "react";

function TableHeader(props) {

  return (
    <table id={props.id}>
      <td> {props.val1} </td>
      <td> {props.val2} </td>
      <td> {props.val3} </td>
      <td> {props.val4} </td>
    </table>
  );
}

export default TableHeader;
