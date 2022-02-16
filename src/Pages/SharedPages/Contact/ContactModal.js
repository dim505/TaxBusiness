import React, { Component } from "react";
import Contact from "./Contact";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";


//this is the modal that contains the contact form
export default function ContactModal(props) {
  return (
    <Modal open={props.OpnModal} onClose={props.CloseModal}>
      <Fade in={props.OpnModal} timeout={500}>
        <div className="CenterModal">
          <Contact CloseModal={props.CloseModal} />
        </div>
      </Fade>
    </Modal>
  );
}
