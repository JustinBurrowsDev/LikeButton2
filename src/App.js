import React, { useState } from "react"
import "./App.css"

function App() {
  const [name, setName] = useState("Like")

  const [count, setCount] = useState(0)

  function updateCount(e) {
    e.preventDefault()
    setCount(count + 1)

    setName("Likes")
  }

  return (
    <div className="App">
      <button onClick={updateCount}>
        {name} {count}
      </button>
    </div>
  )
}

export default App
