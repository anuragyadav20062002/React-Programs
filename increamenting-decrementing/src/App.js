/* eslint-disable no-unused-vars */
import React, { useState } from "react"

const App = () => {
  const [num, setnum] = useState(0)

  const incrementNum = () => {
    setnum(num + 1)
  }

  const decrementNum = () => {
    if (num > 0) {
      setnum(num - 1)
    } else {
      alert("Number cant go below 0")
      setnum(0)
    }
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <button onClick={incrementNum}>Increment</button>
            <button onClick={decrementNum}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
