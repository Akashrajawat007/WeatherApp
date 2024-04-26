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

  //Getting Location from User's Browser
  useEffect(() => {
    getLocation(setError, setLocation)
  }, [])

  //Getting Weather Details everytime value of Location or City changes
  useEffect(() => {
    //Checking if value of Location or City is available to avaoid bad API calls
    if (location || city) {
      //If value of City is available then using City name else using Location co-ordinates to make API call
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
        {/* Checking if User's location is fetched or not */}
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
