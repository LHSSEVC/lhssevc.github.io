import React from "react";
import "../Styles/Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="landing">
        <img className="background" alt="image of a car" src="../../1.jpg" />
        <h2>
          Laurel Heights
          <br />
          Electric Vehicle
          <br />
          Club
        </h2>
      </div>
      <div className="accent-block">
        <h3>Welcome</h3>
      </div>
    </div>
  );
};

export default Home;
