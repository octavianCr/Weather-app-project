import React, {useEffect, useState} from 'react';

export function Forecast() {

    const [city, setCity] = useState('');
    let key = "7fbe27158c9a1686d4802163c2e010e6";
    let urlForecast = `api.openweathermap.org/data/2.5/forecast?id=${city}&appid=${key}`;

    const changeTest = ()=>{
        setCity("Berlin")
    }

    fetch(urlForecast, {
        method: 'get',
        dataType: 'json',
    }) 
    .then(resp =>{
        // return resp.json();
    })
    .then(result =>{
        console.log(result);
    })

        return(
            <>
            </>
        )
}