

    import React, {useState, useEffect} from 'react'

    export const HourlyForecast = () => {
        let city = "Prague"
        let key = "87788a63bed58c4eaf0dcde5024e1e46"
        const ApiCall = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;
        // http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${ApiCall}
        // https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${key}


    // useEffect(() => {
    //     fetch(ApiCall)
    //     .then((response) => response.json())
    //     .then((actualData) => console.log(actualData));
    // }, []);

    const fetchApi = ()=> {
        fetch(ApiCall)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    fetchApi()

    return (
        <>
        <button>FFFFFFFFFFFFFF</button>
        </>
    )
    }

