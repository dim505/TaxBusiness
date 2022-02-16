import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import React, { useEffect, useState, useContext } from "react";
import ContactModal from "./ContactModal";
import Fade from "react-reveal/Fade";
import  "../SharedPages.scss"

//this is the contact me footer thats included in several pages
export default function ContactSection() {
  const [OpnModal, SetOpnModal] = useState(false);

  const CloseModal = () => SetOpnModal(false);
  return (
   <Fade> 
    <div className="contact-section SectionPadding">
      <Typography variant="h5" gutterBottom>
        Feel Free to reach out
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
				Send me a message
	    </Typography>

      <Button onClick={() => SetOpnModal(true)} variant="outlined">
        <MailOutlineIcon />
      </Button>
      

			<Typography variant="h6" gutterBottom>
        FIND US!
      </Typography>

			<Typography variant="subtitle1">
        Dmitriy K.
      </Typography>


			<Typography variant="subtitle1" >
        Greenfield, MA
      </Typography>


			<Typography variant="subtitle1" >
				info@dmitriytaxservices.com
      </Typography>

			<Typography variant="subtitle1" >
        1 (413) 475-4431
      </Typography>

      <div className="SectionPadding" id="footer">
        <Typography variant="overline" display="block" gutterBottom>
          Built by Dmitriy K | 2021
        </Typography>
      </div>

      <ContactModal OpnModal={OpnModal} CloseModal={CloseModal} />
    </div>
    </Fade>
  );
}
