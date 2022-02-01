/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import ToDoLists from "./ToDoLists"

const App = () => {
  const [inputList, setInputList] = useState("")

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

  const deleteItems = (id) => {
    console.log("deleted")
    setItems((oldItems) => {
      return oldItems.filter((arrELm, index) => {
        return index !== id
      })
    })
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

            {items.map((itemvalue, index) => {
              return (
                <ToDoLists
                  text={itemvalue}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              )

              // returning the current value
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
