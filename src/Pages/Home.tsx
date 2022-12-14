import React from "react";
import { Typography, Box } from "@mui/material";
import { ReactComponent as Graphic0 } from "../assets/graphic0.svg";
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
      <Box className="accent block">
        <Typography variant="h2">Welcome</Typography>
        <Typography variant="body1" sx={{ color: "background.default" }}>
          Have an interest, or willingness to learn about design, circuitry, or
          manufacturing?
          <br />
          Ready to work hard, make your mom proud, race vehicles, and bring
          glory and valour to our school?
          <br />
          Join us at lunch on Wednesdays, in room 1106
          {/*TODO add room number (I forget it)*/}
        </Typography>
      </Box>

      <Box>
        <Graphic0 height="50%" width="50%" viewBox="0 0 2100 2100" />
      </Box>
    </div>
  );
};

export default Home;
