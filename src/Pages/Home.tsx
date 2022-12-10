import React from "react";
import { Typography, Box } from "@mui/material";
import "../Styles/Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Box className="landing">
        <img className="background" alt="car" src="../../1.jpg" />
        <Typography variant="h1">
          Laurel Heights
          <br />
          Electric Vehicle
          <br />
          Club
        </Typography>
      </Box>
      <Box className="accent-block">
        <Typography variant="h2">Welcome</Typography>
        <Typography variant="body1" sx={{ color: "background.default" }}>
          Have an interest, or willingness to learn about design, circuitry, or
          manufacturing?
          <br />
          Ready to work hard, race vehicles, and bring glory and valour to our
          school?
          <br />
          Join us at lunch on Wednesdays, in room{" "}
          {/*TODO add room number (I forget it)*/}
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
