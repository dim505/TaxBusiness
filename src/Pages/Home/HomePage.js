import React from "react";
import IntroductionSection from "./IntroductionSection";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import "./home.scss"
import AboutMe from "../AboutMe/AboutMe";
import ContactSection from "../../Pages/SharedPages/Contact/ContactSection";
//#./Pages/SharedPages/Contact/ContactSection
//parent compoent that holds all the compoents related to the home page
export default function HomePage() {
  return (
    <>
      <Fade>
        <IntroductionSection />
      </Fade>
      <Pulse>
				<div className="introduction-section"> 
					<AboutMe />
				</div>
				<div className="introduction-section">
					<ContactSection />
				</div>
 
      </Pulse>
    
    </>
  );
}
