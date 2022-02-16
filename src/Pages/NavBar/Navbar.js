import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import "./navbar.scss"

//parent compoent that holds the Navbar
const NavBar = () => {
  return (
		<>
    <div className="home-header">

      <div className="NavButtonsGroup flex-end">


      <NavLink
        /*  className="navbar__link"
          activeClassName="navbar__link--active" */
        to="/"
      >
        <Button>
            Home
        </Button>
      </NavLink>

        <NavLink
          /*  className="navbar__link"
          activeClassName="navbar__link--active" */
          to="/About"
        >
          <Button>About</Button>
        </NavLink>
        <NavLink
          /*  className="navbar__link"
          activeClassName="navbar__link--active" */
          to="/Contact"
        >
          <Button>Contact</Button>
        </NavLink>
      </div>
    </div>
		<div className="spacing"/>
		</>
  );
};

export default NavBar;
