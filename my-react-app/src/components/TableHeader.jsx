import React from "react";

function TableHeader(props) {

    const macrosHeader = (
        <table id = {props.id}>
          <tbody>
            <tr>
                <td>Calories</td>
                <td> {props.val2} </td>
                <td> {props.val3} </td>
                <td> {props.val4} </td>
            </tr>
          </tbody>
        </table>
      );
    
    const calculatorHeader = (
        <table id = {props.id}>
            <tbody>
            <tr>
                <td>Ingredient</td>
                <td>Grams</td>
                <td>Calories</td>
                <td> {props.val2} </td>
                <td> {props.val3} </td>
                <td> {props.val4} </td>
            </tr>
            </tbody>
        </table>
    );
    

    if (props.type === "1"){
        return macrosHeader
    } else {
        return calculatorHeader
    }
}

export default TableHeader;
