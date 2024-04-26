import { useState, useEffect } from "react"
import Header from "./components/Header"
import Container from "./components/Container"
import Search from "./components/Search"
import CityInfo from "./components/CityInfo"
import AppBody from "./components/AppBody"
import getLocation from "./utils/getLocation"
import getDetails from "./utils/getDetails"

import "./App.css"

function App() {
  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")
  const [details, setDetails] = useState(null)
  const [error, setError] = useState(null)
  const API_KEY = import.meta.env.VITE_API_KEY

  useEffect(() => {
    getLocation(setError, setLocation)
  }, [])

  useEffect(() => {
    if (location || city) {
      const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${
        city ? city : `${location?.latitude},${location?.longitude}`
      }`
      getDetails(url, setDetails, setError)
    }
  }, [location, city])

  return (
    <div className="app">
      <Header />
      <Container>
        <Search cityHandler={setCity} />
        {location === "" && city === "" ? (
          <p>Allow Location or Search by City name manually</p>
        ) : (
          <>
            {details && (
              <div>
                <CityInfo
                  city={details?.location.name}
                  country={details?.location.country}
                />
                <AppBody data={details} />
              </div>
            )}
          </>
        )}
      </Container>
      {error && <h4>Error: {error}</h4>}
    </div>
  )
}

export default App
