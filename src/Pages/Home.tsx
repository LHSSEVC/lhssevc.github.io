import React from 'react'
import "../Styles/Home.css"

const Home = () => {
  return (
    <div>
      <h1>Laurel Heights Secondary School EVC Club</h1>
      <img src='../../1.jpg' alt="img1.jpg"></img>
      <br/>
      <div className="content">
        <h2>Welcome!</h2>
        <h3>Meetings on Wednesdays, after school.</h3>
        <p>
        LHSS's Electric Vehicle Club is working on producing a new vehicle to compete in the University of Waterloo's Electric Vehicle Challenge.
        </p>
      </div>
    </div>
  )
}

export default Home