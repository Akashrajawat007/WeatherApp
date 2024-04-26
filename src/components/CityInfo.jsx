import React from "react"
import { GrLocationPin } from "react-icons/gr"

function CityInfo({city,country}) {
  return (
    <div className="city">
      <h2>{city}</h2>
      <p>
        <GrLocationPin />
        {country}
      </p>
    </div>
  )
}

export default CityInfo
