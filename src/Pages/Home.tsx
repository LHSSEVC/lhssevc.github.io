import React from "react";
import { Typography, Box } from "@mui/material";
import { ReactComponent as Graphic0 } from "../assets/graphic0.svg";
import About from "./About";
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
        </Typography>
      </Box>

      <Box className="block" sx={{ display: "flex" }}>
        <Box sx={{flexShrink: 1}}>
          <Graphic0 height="100%" width="100%" viewBox="0 0 1500 1200" />
        </Box>
        <Box>
          <About />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
