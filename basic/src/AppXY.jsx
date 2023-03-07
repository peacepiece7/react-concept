import React, { useState } from "react"
import "./AppXY.css"

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  return (
    <div
      onPointerMove={(e) => {
        setPosition({ x: e.pageX, y: e.pageY })
      }}
      style={{ width: "100%", height: "3000px", backgroundColor: "black" }}
    >
      <div
        className="mousePointer"
        style={{
          transform: `translate(${position.x - 5}px, ${position.y - 25}px)`,
        }}
      />
      hello, world!
    </div>
  )
}
