
import React, {useEffect, useState} from 'react';
import {Forecast} from "./Forecast"
import {HourlyForecast} from "./HourlyForecast"



function App() {
  const [city, setCity] = useState('');
  let key = "7fbe27158c9a1686d4802163c2e010e6";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  const [feelsLike, setFeelsLike] = useState("21")
  const [weatherDescription, setWeatherDescription] = useState("sunny");
  const [weatherTemperature, setWeatherTemperature] = useState("23°")


  const searchWeather = (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'get',
      dataType: 'json',
  }) 
  .then(resp =>{
      return resp.json();
  })
  .then(result =>{
      console.log(result);
        let cityNameTop = document.getElementById("cityName");
        cityNameTop.textContent = city;

        let cityNameBottom = document.getElementById("cityN");
        cityNameBottom.textContent = city;

        let temperature = Math.round(parseFloat(result.main.temp) - 273.15)  + "°" ;
        setWeatherTemperature(temperature)
        // temperature.textContent= Math.round(parseFloat(result.main.temp) - 273.15) + "°";


        let desc = result.weather[0].description;
        setWeatherDescription(desc)

        let feelsLikeTemp =  ` ${Math.round(parseFloat(result.main.feels_like) - 273.15)}°`
        setFeelsLike(feelsLikeTemp)

    })
  }

  const searchOnEnter = (event) => {}


    useEffect(()=>{
      let Test = weatherDescription.includes("clear sky")
      if(Test){
        console.log("f");
      }
    },[weatherDescription])



  return (
    <>
      <nav className="navigation">
        <form id="navForm" onSubmit={(event) => searchWeather(event)} >
          <input type="text" placeholder="Enter your city here:" value={city} id="cityEntry" onChange={(event) => setCity(event.target.value)}></input> 
          {/* event => target => value */}
          <button id="btn">Search</button>
        </form>
      </nav>
    
      <h1 className="city-n " id="cityName">New York</h1>

      <div className="weatherBubble">
        <div className="weatherBubble__text">
          <span id="cityN">New York</span>
          <span id="Temp">{weatherTemperature}</span>
          <span id="description" >{weatherDescription}</span>
          <span id="feelsLike">Feels like {feelsLike}</span>
        </div>

        <div className="weatherBubble__img">
          <div id="weatherimg"></div>
        </div>
      </div>

      {/* <Forecast/> */}

      <HourlyForecast FR={city}/>
    </>
  );


}


export default App;

