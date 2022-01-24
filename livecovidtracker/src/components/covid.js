/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"

const App = () => {
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json")
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
