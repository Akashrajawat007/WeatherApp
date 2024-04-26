import React from "react"
import IconTile from "./IconTile"
import WeatherInfo from "./WeatherInfo"

function AppBody({ data }) {
  return (
    <div className="app-body">
      <IconTile
        icon={data?.current.condition.icon}
        text={data?.current.condition.text}
      />
      <WeatherInfo
        temperature={data?.current.temp_c}
        humidity={data?.current.humidity}
        wind={data?.current.wind_kph}
        degree={data?.current.wind_degree}
        direction={data?.current.wind_dir}
      />
    </div>
  )
}

export default AppBody
