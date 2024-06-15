import React, { useState, useEffect } from "react";

function TableRow(props) {
  const [val2, setVal2] = useState(props.val2);
  const [val3, setVal3] = useState(props.val3);
  const [val4, setVal4] = useState(props.val4);
  
  const calculateTotal = (val2, val3, val4) => {
    return (Number(val2) * 4) + (Number(val3) * 9) + (Number(val4) * 4);
  };

  const [total, setTotal] = useState(calculateTotal(val2, val3, val4));

  useEffect(() => {
    setTotal(calculateTotal(val2, val3, val4));
  }, [val2, val3, val4]);

  const handleValChange = (setter) => (e) => {
    setter(e.target.innerText);
  };

  const macrosRow = (
    <table id = {props.id}>
      <tbody>
        <tr>
          <td>{total}</td>
          <td contentEditable="true" onInput={handleValChange(setVal2)}>{val2}</td>
          <td contentEditable="true" onInput={handleValChange(setVal3)}>{val3}</td>
          <td contentEditable="true" onInput={handleValChange(setVal4)}>{val4}</td>
        </tr>
      </tbody>
    </table>
  );

  const calculatedRow = (
    <table id = {props.id}>
      <tbody>
        <tr>
          <td>{props.itemName}</td>
          <td>{props.amount}</td>
          <td>{Math.round(total * 100)/100}</td>
          <td contentEditable="true" onInput={handleValChange(setVal2)}>{val2}</td>
          <td contentEditable="true" onInput={handleValChange(setVal3)}>{val3}</td>
          <td contentEditable="true" onInput={handleValChange(setVal4)}>{val4}</td>
        </tr>
      </tbody>
    </table>
  );

  if (props.type === "1"){
    return macrosRow;
  } else {
    return calculatedRow;
  }
}

export default TableRow;

