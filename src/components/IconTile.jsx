import React from "react"

function IconTile({ icon, text }) {
  return (
    <div className="glass-box">
      <img src={`http:${icon}`} alt="Icon" />
      <h3>{text}</h3>
    </div>
  )
}

export default IconTile
