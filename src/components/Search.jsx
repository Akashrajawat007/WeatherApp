import React, { useState, useRef } from "react"
import { TbMapPinSearch } from "react-icons/tb"
import capitalize from "../utils/capitalize"

function Search({ city, cityHandler }) {
  const [temp, setTemp] = useState(city)
  const inputRef = useRef(null)

  return (
    <div className="search">
      <input
        type="text"
        placeholder="🔍 Search City..."
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        ref={inputRef}
      />
      <div className="icon">
        <TbMapPinSearch
          size={30}
          onClick={() => cityHandler(capitalize(temp))}
        />
      </div>
    </div>
  )
}

export default Search
