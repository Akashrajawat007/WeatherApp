import React from 'react'
import { FaTemperatureHalf } from "react-icons/fa6"
import { MdWindPower } from "react-icons/md"
import { WiHumidity } from "react-icons/wi"

function WeatherInfo({temperature,humidity,wind,degree,direction}) {
  return (
    <div>
    <div className="line">
      <FaTemperatureHalf size={30} />
      <p>{temperature}&deg;C</p>
    </div>
    <div className="line">
      <WiHumidity size={30} />
      <p>{humidity}%</p>
    </div>
    <div className="line">
      <MdWindPower size={30} />
      <p>{wind} km/h at {degree}&deg; {direction}</p>
    </div>
  </div>
  )
}

export default WeatherInfo