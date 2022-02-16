import React, { Component } from "react";
import { Formik } from "formik";
import { ContactForm } from "./ContactForm";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import DialogBox from "../../../SharedFunctions/DialogBox";

//rules that enforced data validation
const validationSchema = Yup.object({
  Subject: Yup.string("Enter a Subject").required("Subject is Required"),
  Message: Yup.string("Enter a Message").required("Message is Required"),
  Email: Yup.string("Enter Your Email")
    .email("Please Enter a Valid Email")
    .required("Email is Required")
});

//form used to contact me with an email (subject and message)
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitValues = (values, { resetForm }) => {
    //gets values from form
    window.values = values;
    //gets function to reset form
    window.resetForm = resetForm;
    //opens warning dialog box
    this.OpenSaveWarnBox();
    //;
  };

  Save = async () => {
    //Builds out object to send to back end
    var Mydata = {};
    Mydata.message = window.values;
    console.log(Mydata);

    Mydata.message.FromEmail = window.values.Email;

    //makes api call
    var Results = await Axios.post(
      `${process.env.REACT_APP_BackEndUrl}/api/PortfolioV2/ContactMe`,
      Mydata
    ).then((results) => {
      console.log(results);
    });

    //closes warning box, Modal, and reset form*/
    this.CloseSaveWarnBox();
    window.resetForm({});
    this.props.CloseModal();
  };

  //function to open warning box
  OpenSaveWarnBox = () => {
    this.setState({
      OpnSaveWarningBox: true
    });
  };

  //function to close warning box
  CloseSaveWarnBox = () => {
    this.setState({
      OpnSaveWarningBox: false
    });
  };

  render() {
    const values = { Subject: "", Message: "", Email: "" };
    return (
      <React.Fragment>
        <div>
          <Paper
            classes={{
              root: "ContactMe"
            }}
          elevation={3}>
            <Typography
             
              variant="h5"
              component="h2"
            >
              Contact Me!
            </Typography>
            <Formik
              initialValues={values}
              onSubmit={this.submitValues}
              validationSchema={validationSchema}
              render={(props) => <ContactForm {...props} />}
            />
          </Paper>

          <DialogBox
            OpnSaveWarningBox={this.state.OpnSaveWarningBox}
            CloseSaveWarnBox={this.CloseSaveWarnBox}
            Save={this.Save}
            message="Are you sure you want to send message"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
