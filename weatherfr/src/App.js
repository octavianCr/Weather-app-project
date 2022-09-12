
import React, {useEffect, useState} from 'react';




function App() {
  const [city, setCity] = useState('bran');
  let key = "7fbe27158c9a1686d4802163c2e010e6";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;



  // !!!!!!!!!DOES NOT WORK!!!!!!!!!!!!!!!

  // let formNav = document.getElementById("navForm")
  // let cityEntry = document.getElementById("cityEntry")
  // let btn = document.getElementById("btn")

  // formNav.addEventListener("submit", function(ev){
  //   ev.preventDefault()
  //   console.log(cityEntry.value);
  //   city = cityEntry.value;
  //   cityEntry.value = ""
  // })

    // !!!!!!!!!DOES NOT WORK!!!!!!!!!!!!!!!


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

        let temperature = document.getElementById("Temp");
        temperature.textContent= Math.round(parseFloat(result.main.temp) - 273.15) + "°";

        let desc =document.getElementById("description");
        desc.textContent = result.weather[0].description;

        let feelsLikeTemp = document.getElementById("feelsLike");
        feelsLikeTemp.textContent =   `Feels like ${Math.round(parseFloat(result.main.feels_like) - 273.15)}°` ;
    })
  }

  const searchOnEnter = (event) => {

  }

  return (
    <>
      <nav className="navigation">
        <form id="navForm" onSubmit={(event) => searchWeather(event)} onKeyPress={(event) => searchOnEnter()}>
          <input type="text" placeholder="FFFFFFFFFFFFFFFFFFFF" value={city} id="cityEntry" onChange={(event) => setCity(event.target.value)}></input> 
          {/* event => target => value */}
          <button id="btn">CLICK</button>
        </form>
      </nav>
    
      <h1 className="city-n " id="cityName">New York</h1>

      <div className="weatherBubble">
        <div className="weatherBubble__text">
          <span id="cityN">New York</span>
          <span id="Temp">25°</span>
          <span id="description">Thunderstorm</span>
          <span id="feelsLike">Feels like 23°</span>
        </div>

        <div className="weatherBubble__img">
          <div id="weatherimg"></div>
        </div>
      </div>
    </>
  );


}


export default App;

