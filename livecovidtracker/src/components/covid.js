import React, { useEffect, useState } from "react"
import "./covid.css"
const App = () => {
  //getting the data
  //await is used to wait for a promise
  //async makes sure that a promise is surely returned by the api
  const [data, setData] = useState([])

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json")
    const actualData = await res.json()
    console.log(actualData.statewise[0])
    setData(actualData.statewise[0])
  }

  //useEffect is used to update the data whenerver the page is refreshed for the first time
  useEffect(() => {
    getCovidData()
  }, [])

  return (
    <>
      <h1>LIVE</h1>
      <h2>COVID-19 TRACKER</h2>

      <ul>
        <li className="box">
          <div className="wave">
            <div className="card__inner">
              <p className="card__name">
                <span>OUR</span>COUNTRY
              </p>
              <p className="card__total card__small">INDIA</p>
            </div>
          </div>
        </li>
        <li className="box">
          <div className="wave">
            <div className="card__inner">
              <p className="card__name">
                <span>Total</span>Recovered
              </p>
              <p className="card__total card__small">{data.recovered}</p>
            </div>
          </div>
        </li>
        <li className="box">
          <div className="wave">
            <div className="card__inner">
              <p className="card__name">
                <span>Total</span>Confirmed
              </p>
              <p className="card__total card__small">{data.confirmed}</p>
            </div>
          </div>
        </li>
        <li className="box">
          <div className="wave">
            <div className="card__inner">
              <p className="card__name">
                <span>Total</span>Death
              </p>
              <p className="card__total card__small">{data.deaths}</p>
            </div>
          </div>
        </li>
        <li className="box">
          <div className="wave">
            <div className="card__inner">
              <p className="card__name">
                <span>Total</span>Active
              </p>
              <p className="card__total card__small">{data.active}</p>
            </div>
          </div>
        </li>
        <li className="box">
          <div className="wave">
            <div className="card__inner">
              <p className="card__name">
                <span>Last</span>Updated
              </p>
              <p className="card__total card__small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default App
