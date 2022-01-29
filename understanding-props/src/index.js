/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react"
import ReactDOM from "react-dom"
import Card from "./Cards"
import "./index.css"
ReactDOM.render(
  <>
    <Card
      imgsrc="https://wallpapercave.com/wp/wp6902930.jpg"
      title="A Netflix Original Series"
      sname="Dark"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
      imgsrc="https://wallpapercave.com/dwp1x/wp5506410.jpg"
      title="A Netflix Original Series"
      sname="Peaky Blinders"
      link="https://www.netflix.com/in/title/80002479"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4663954.jpg"
      title="A Netflix Original Series"
      sname="Stranger Things"
      link="https://www.netflix.com/in/title/80057281"
    />
  </>,
  document.getElementById("root")
)
