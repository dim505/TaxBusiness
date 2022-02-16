import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import ContactSection from "../SharedPages/Contact/ContactSection";
import Fade from "react-reveal/Fade";
import Context from "../../context"
import {observer} from "mobx-react"
import Grid from '@mui/material/Grid';
import img1 from "./Img1.gif"
import img2 from "./img2.jpg"



/* contains info for the about page*/
 function AboutMe() {

  return (
    <Fade>
      <div className="AboutPage">
			<Grid container spacing={4}>
				<Grid item xs={6}>

				<img src={img2}/>

				</Grid>
				<Grid item item xs={6}>   

				<Typography classes={{ root: "AboutSection" }} variant="h6" gutterBottom>
          About US
        </Typography>
				

				<Typography variant="subtitle1" gutterBottom>
						Dmitriy's Tax Service  is a locally owned Tax Preparation Services company in the Western, Massachusetts area. 
        </Typography>
				
				
				
				</Grid>

			</Grid>	


			<Grid container spacing={4}>

			<Grid item xs={6}>


<Typography classes={{ root: "AboutSection" }} variant="h6" gutterBottom>
SERVICES PROVIDED BY US
</Typography>


<Typography variant="subtitle1" gutterBottom>
	<ol>
			<li>Fast and accurate income tax preparation services</li>
			<li>This is a friendly, well trained, knowledgeable, and experienced tax professional(s) that starves to provide you with an excellent services at a reasonable fees.</li>
			<li>When it comes to Tax services, experience matters. As a graduate of a computer Information System and business management major student and the owner of Dmitriy's Tax Services</li>
			<li>Your time is very important to us, which is why we are offering you a quick and accurate services. Just assure us you provide the correct documents necessary.</li>
			<li>For more information on how to contact us or provide feedback, please click on "Contact".</li>


	</ol>
</Typography>


</Grid>

					<Grid item xs={6}>


					<img src={img1}/>
					</Grid>
		
				
			</Grid>	

 
      </div>
    </Fade>
  );
}

export default observer(AboutMe)