import React, { useState, useRef } from "react"
import { TbMapPinSearch } from "react-icons/tb"
import capitalize from "../utils/capitalize"

function Search({ cityHandler }) {
  const inputRef = useRef(null)
  const [temp, setTemp] = useState("")

  const handleKeyDown = (e) => {
    //Checking if "Enter" key is pressed
    if (e.key === "Enter") {
      cityHandler(capitalize(temp))
      inputRef.current.blur()
      setTemp("")
    }
  }

  const handleSearch = () => {
    cityHandler(capitalize(temp))
    setTemp("")
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="🔍 Search City..."
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <div className="icon">
        <TbMapPinSearch
          size={30}
          onClick={handleSearch}
        />
      </div>
    </div>
  )
}

export default Search
