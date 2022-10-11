
    import React, {useState, useEffect} from 'react';
    import "./styles/HourlyForecast.scss";
    import   sun from "./styles/styleImg/sun.svg"
    import rain from "./styles/styleImg/rain.svg"
    import thunderstorm from "./styles/styleImg/thunder.svg"
    import loneCloud from "./styles/styleImg/loneCloud.svg"


    export function HourlyForecast(props) {
        let city = props.city;
        const key = "87788a63bed58c4eaf0dcde5024e1e46";
        const ApiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;
        // const ApiSecondTry = `https://api.openweathermap.org/data/2.5/forecast?q=Prague&appid=87788a63bed58c4eaf0dcde5024e1e46`;

        const [tempForecast, setTempForecast] = useState("00");
        const [descriptionForecast, setDescriptionForecast] = useState("rain");

        const [tempForecast2, setTempForecast2] = useState("00");
        const [descriptionForecast2, setDescriptionForecast2] = useState("rain");

        const [tempForecast3, setTempForecast3] = useState("00");
        let [descriptionForecast3, setDescriptionForecast3] = useState("rain");

        const [statusImg, setStatusImg] = useState(sun);

        const timeFr = new Date();
        const hour = timeFr.getHours();
        

        const fetchForecast = ()=>{
            fetch(ApiCall, {
                method: 'get',
                dataType: 'json',
            }) 


            .then(resp =>{
                return resp.json();
            })

            .then(result =>{
                let timeIndex = 0;
                let timeIndexSecond = 1;
                let timeIndexTrd = 2;

                if(timeIndex !== null){
                    timeIndex = hour;
                    timeIndexSecond += hour;
                    timeIndexTrd += hour;
                }else{
                    timeIndex = 0
                    timeIndexSecond = 1
                    timeIndexTrd = 7
                }


                // console.log(result);
                let calculateTemp = Math.round(parseFloat(result.list[timeIndex].main.temp) - 273.15)
                let descFr = result.list[timeIndex].weather[0].description
                setTempForecast(calculateTemp)
                setDescriptionForecast(descFr)

                let calculateTemp2 = Math.round(parseFloat(result.list[timeIndexSecond].main.temp) - 273.15)
                let descFr2 = result.list[timeIndexSecond].weather[0].description
                setTempForecast2(calculateTemp)
                setDescriptionForecast2(descFr)

                let calculateTemp3 = Math.round(parseFloat(result.list[timeIndex].main.temp) - 273.15)
                let descFr3 = result.list[timeIndex].weather[0].description
                setTempForecast3(calculateTemp)
                setDescriptionForecast3(descFr)


            })
        }

            useEffect(()=>{
                let rainCheck = descriptionForecast.includes("rain")
                let thunderCheck = descriptionForecast.includes("thunder")
                let sunCheck = descriptionForecast.includes("sun")
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
        
            },[descriptionForecast])



        return (
            <>
            <div className='HourlyForecastContainer'>
                <div className="Hourly" onClick={()=> fetchForecast()}>
                    <div className='Hourly__img'>
                        <img src={statusImg} />
                    </div>
                    <div className='Hourly__txt'>
                        <span> {hour}:00</span>
                        <span>{tempForecast}°</span>
                        <span>{descriptionForecast}</span>
                    </div>
                </div>

                <div className="Hourly" onClick={()=> fetchForecast()}>
                <div className='Hourly__img'>
                        <img src={statusImg} />
                    </div>
                    <div className='Hourly__txt'>
                        <span> {hour + 1}:00</span>
                        <span>{tempForecast2}°</span>
                        <span>{descriptionForecast2}</span>
                    </div>
                </div>

                <div className="Hourly" onClick={()=> fetchForecast()}>
                <div className='Hourly__img'>
                        <img src={statusImg} />
                    </div>
                    <div className='Hourly__txt'>
                        <span> {hour + 2}:00</span>
                        <span>{tempForecast2}°</span>
                        <span>{descriptionForecast2}</span>
                    </div>
                </div>

            </div>
            </>
        )

    }
        

    


    // return (
    //     <>
    //     <div className='HourlyForecastContainer'>
    //         <div className="Hourly" onClick={()=> fetchForecast()}>
    //             <div className='Hourly__img'></div>
    //             <div className='Hourly__txt'>
    //                 <span> time</span>
    //                 <span>{tempForecast}°</span>
    //                 <span>desc</span>
    //             </div>
    //         </div>
    //     </div>
    //     </>
    // )

    // }

