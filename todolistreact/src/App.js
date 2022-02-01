/* eslint-disable no-unused-vars */
import React, { useState } from "react"

const App = () => {
  const [inputList, setInputList] = useState("buy apple")

  const [items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("")
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Add items
          "
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/* <li>{inputList}</li> */}

            {items.map((itemvalue) => {
              return <li>{itemvalue}</li>

              // returning the current value
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
