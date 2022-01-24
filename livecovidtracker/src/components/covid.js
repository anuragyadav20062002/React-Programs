/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"

const App = () => {
  //getting the data
  //await is used to wait for a promise
  //async makes sure that a promise is surely returned by the api
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json")
    const actualData = await res.json()
    console.log(actualData.statewise[0])
  }

  //useEffect is used to update the data whenerver the page is refreshed for the first time
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
