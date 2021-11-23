import React from "react";
import { useState, useEffect } from "react";
import "./weather.css";
import Weathercard from'../weathercard/Weathercard'
function Weather() {
  const [city, setCity] = useState("");
  const [data,setData] =useState([]);
  const [query,setQuery] =useState("Bhadrak");

  const cityHandle = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };


  useEffect( () => {
      fetchData();
      console.log(`quiery updated = ${query}`);
  },[query]);



  const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=41dd6960cd3789a72ea43e35636a576d&units=metric`
      );
      const result = await response.json();
      setData(result);
    };


    const getQuery = e =>{
      e.preventDefault();
      if(city===""){
        return alert('Enter City Name ')
      }
      setQuery(city);
    };

  return (
    <>
      <div className="cointainer">
        <div className="weather_card" >
          <form>
            <input
              type="text"
              onChange={cityHandle}
              placeholder="Enter City Name"
            ></input>
            <button type="submit" onClick={getQuery}>
              Search
            </button>
              {
                data.length!==0 && data.cod !== '404' ? 
                <Weathercard cityname={data.name} weather={data.weather[0].main} temp={data.main.temp} maxtemp={data.main.temp_max} mintemp={data.main.temp_min} />
                :
                <Weathercard cityname="City not found" weather="Null" temp="Null" maxtemp="Null" mintemp="Null" />
              }
          </form>
        </div>
      </div>
    </>
  );
}

export default Weather;
