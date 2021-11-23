import React from 'react'
import './weathercard.css'
function Weathercard(props) {
    return (
        <>
            <div className="cityname">
                {props.cityname}
            </div>
            <div className="weather">
                {props.weather}<br></br>weather
            </div>
            <div className="temp">
                {props.temp}<br></br>Temperature
            </div>

            <div className="temp_max_min">
                <div className="max_temp">
                    {props.maxtemp}<br></br><span>Max Temp.</span>
                </div>
                <div className="min_temp">
                    {props.mintemp}<br></br><span>Min Temp.</span>
                </div>
            </div>

        </>
    )
}

export default Weathercard
