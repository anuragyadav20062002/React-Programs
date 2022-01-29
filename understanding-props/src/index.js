/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
  <>
    <div className="cards">
      <div className="card">
        <img
          src="https://wallpapercave.com/wp/wp6902930.jpg"
          alt="myPic"
          className="card__img"
        />
        <div className="card__info">
          <span className="card_category">A Netflix Original Series</span>
          <h3 className="card__title"> Dark</h3>
          <a
            href="https://www.netflix.com/in/title/80100172"
            target="_blank"
            rel="noreferrer"
          >
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>,
  document.getElementById("root")
)
