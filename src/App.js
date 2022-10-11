
import React, {useEffect, useState} from 'react';
import {Forecast} from "./Forecast"
import {HourlyForecast} from "./HourlyForecast"
import CityButton from './components/CityButton';


import  sun from "./styles/styleImg/sun.svg"
import rain from "./styles/styleImg/rain.svg"
import thunderstorm from "./styles/styleImg/thunder.svg"
import loneCloud from "./styles/styleImg/loneCloud.svg"

import   graph from "./styles/styleImg/Vector4.svg"
import   "./styles/graphStyle.scss"




function App() {
  const [city, setCity] = useState('');
  let key = "7fbe27158c9a1686d4802163c2e010e6";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  const [feelsLike, setFeelsLike] = useState("21")
  const [weatherDescription, setWeatherDescription] = useState("sun");
  const [weatherTemperature, setWeatherTemperature] = useState("23°")
  const [wind, setWind] = useState("999km/h");
  const [humidity, setHumidity] = useState("77%")
  const [statusImg, setStatusImg] = useState(sun)
  console.log(statusImg);
  const d = new Date();
  const dComplete = d.getFullYear() + "/" + d.getMonth() + "/" + d.getDay() + ".";




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
        let temperature = Math.round(parseFloat(result.main.temp) - 273.15)  + "°" ;
        setWeatherTemperature(temperature)

        let desc = result.weather[0].description;
        setWeatherDescription(desc)

        let feelsLikeTemp =  ` ${Math.round(parseFloat(result.main.feels_like) - 273.15)}°`
        setFeelsLike(feelsLikeTemp)

        let windIndex = Math.round(parseFloat(result.wind.speed)) * 2;
        setWind(windIndex);

        let humidityIndex = result.main.humidity
        setHumidity(humidityIndex)

    })
  }

  const searchOnEnter = (event) => {}


    useEffect(()=>{
      let rainCheck = weatherDescription.includes("rain")
      let thunderCheck = weatherDescription.includes("thunder")
      let sunCheck = weatherDescription.includes("sun")
      if(rainCheck){
        console.log("f");
        setStatusImg(rain);
      }else if(thunderCheck){
        console.log("f");
        setStatusImg(thunderstorm);
      }else if(sunCheck){
        console.log("f");
        setStatusImg(sun);
      }else{
        setStatusImg(loneCloud);
      }

    },[weatherDescription])



  return (
    <>

        <nav className="navigation">
          <form id="navForm" onSubmit={(event) => searchWeather(event)} >
            <input type="text" placeholder="Enter your city here..." value={city} id="cityEntry" onChange={(event) => setCity(event.target.value)}></input> 
            {/* event => target => value */}
            <button id="btn">Search</button>
            {/* <CityButton/> */}
          </form>
        </nav>

        <h1 className="city-n " id="cityName">{city}</h1>

    <div className="design-container">

        <div className="weatherBubble">
          <div className="weatherBubble__text">
            <span id="cityN">{city}</span>
            <span id="Temp">{weatherTemperature}</span>
            <span id="description" >{weatherDescription}</span>
            <span id="feelsLike">Feels like {feelsLike}</span>
          </div>

          <div className="weatherBubble__img">
            <img src={statusImg}></img>
          </div>
        </div>

        <HourlyForecast city={city}/>

      </div>

      <div className="graph">
          <div className="graph__img">
            <img src={graph}></img>
          </div>

          <div className="graph__content">
            <span>wind: {wind} Km/h</span>
            <span>{dComplete}</span>
            <span> Humidity: {humidity}%</span>
          </div>
      </div>
    </>
  );


}


export default App;

