import React, { useState } from "react";
import Calculator from "./Calculator";
import Macros from "./Macros";
import "bootstrap/dist/css/bootstrap.min.css";
import IngredientsList from "./IngredientsList";
import axios from 'axios';

function Display() {
  const YOUR_API_KEY = "/jYEeFiIyQ4Ar51ADubPNA==645s3RaqErAL7pzd"; // replace this with your actual API key

  const [calculate, setCalculate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [queryResult, setQueryResult] = useState([]);

  const tempData = [
    { id: 1, val2: 16, val3: 0.3, val4: 4 },
    { id: 2, val2: 16, val3: 0.3, val4: 3 },
    { id: 3, val2: 2, val3: 0.3, val4: 20 },
    { id: 4, val2: 0, val3: 0.3, val4: 2 }
  ];

  async function APIQuery(query) {
    try {
      setLoading(true);
      const response = await axios.get('https://api.calorieninjas.com/v1/nutrition', {
        params: { query },
        headers: { 'X-Api-Key': YOUR_API_KEY },
      });
      setQueryResult(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.error('Error fetching data', error);
      setQueryResult(tempData);
    } finally {
      setLoading(false);
      setCalculate(1);
    }
  }

  function handleClick(event) {
    event.preventDefault();
    const query = document.getElementById("itemList").value;
    APIQuery(query);
  }

  function displayCalculatedData(loading){
    if (loading) {
      return <p style={{textAlign:'center'}}>Calculating...</p>;
    } else {
      return <Calculator calculate={calculate} onClick={handleClick} databaseQuery={queryResult} />;
    }
  }

  return (
    <div>
      <Macros />
      <IngredientsList count={calculate} onClick={handleClick} />
      {displayCalculatedData(loading)}
    </div>
  );
}

export default Display;
