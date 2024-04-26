import { useState, useEffect } from "react"
import Container from "./components/Container"
import Search from "./components/Search"
import getLocation from "./utils/getLocation"
import axios from "axios"
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

  return (
    <div className="app">
      <h2>Weather App</h2>
      <Container>
        <Search city={city} cityHandler={setCity} />
        {location === "" && city === "" ? (
          <p>Allow Location or Search by City name manually</p>
        ) : (
          <div>Body</div>
        )}
      </Container>
      {error && <h4>Error: {error}</h4>}
    </div>
  )
}

export default App
