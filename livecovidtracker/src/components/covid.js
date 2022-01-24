/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"

const App = () => {
  //getting the data
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json")
    const actualData = await res.json()
    console.log(actualData.statewise[0])
  }
  useEffect(() => {
    getCovidData()
  }, [])

  return (
    <>
      <h1>LIVE</h1>
      <h2>COVID-19 TRACKER</h2>
    </>
  )
}

export default App
