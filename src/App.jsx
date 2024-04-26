import { useState, useEffect } from "react"
import Container from "./components/Container"
import "./App.css"

function App() {
  const [city, setCity] = useState("")
  console.log("City: ",city);
  return (
    <>
      <div className="app">
        <h2>Weather App</h2>
        <Container>

        </Container>
      </div>
    </>
  )
}

export default App
