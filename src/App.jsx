import { useState, useEffect } from "react"
import Container from "./components/Container"
import Search from "./components/Search"
import "./App.css"

function App() {
  const [city, setCity] = useState("")
  console.log("City: ", city)
  return (
    <>
      <div className="app">
        <h2>Weather App</h2>
        <Container>
          <Search city={city} cityHandler={setCity} />
        </Container>
      </div>
    </>
  )
}

export default App
