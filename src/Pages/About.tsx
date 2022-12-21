import React from "react";
import "../Styles/About.scss";
import { Box, Typography } from "@mui/material";

interface Goals {
  [key: string]: JSX.Element;
}

const goals: Goals = {
  Design: (
    <Typography>
      Using design technologies such as AutoCAD, we plan and design detailed
      models of our cars. We carefully design sleek, visually appealing,
      lightweight cars, which are made to perform.
    </Typography>
  ),
  Building: (
    <Typography>
      Every year, we build or significantly improve an electric vehicle.
      Currently, we are working on 803, a high-tech, meticulously planned car.
      Using powerful tools, we create the frame, body panels, seat, steering
      mechanism, and various electrical components.
    </Typography>
  ),
  Racing: (
    <Typography>
      Twice a year, the University of Waterloo holds an electric vehicle
      competition for high schools across the region. We compete in these races
      with our vehicles. Drivers must not only go fast, but must also be weary
      of battery levels remaining.{" "}
    </Typography>
  ),
};

const About = () => {
  const [goal, setGoal] = React.useState("Design");
  return (
    <div className="About">
      <Typography variant="h2" sx={{color: "#000000"}}>What we do</Typography>
      <Box className="bar">
        {Object.keys(goals).map((g) => (
          <button
            key={g}
            onClick={() => {
              setGoal(g);
            }}
          >
            {g}
          </button>
        ))}
      </Box>
      <Box className="goal-text">{goals[goal]}</Box>
    </div>
  );
};

export default About;
