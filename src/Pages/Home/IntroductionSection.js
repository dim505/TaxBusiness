import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import TypeWriter from "react-typewriter";


//this is the first compoent you see on the home page
const IntroductionSection = () => {
  return (
    <div className="introduction-section">
      <div className="intro-cont">

      <TypeWriter typing={1}>

        <Typography display="block" variant="h2">
          Dmitriy Tax Services
        </Typography>

        <Typography display="block" variant="h5" gutterBottom>
          Your Local Western Mass Tax Professional 
        </Typography>
        <Typography variant="body1" gutterBottom>
          Based in Massachetts
        </Typography>
        </TypeWriter>
      </div>
    </div>
  );
};

export default IntroductionSection;
