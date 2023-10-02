import React, { useState } from "react";
import "./ContactForm.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  email: {
    "& > *": {
      marginBottom: '15px',
      backgroundColor: "#3b4353 !important",
      color: "white !important",
      "&:hover": {
        backgroundColor: "#3b4353 !important",
        color: "white !important",
      },
      "&.Mui-focused": {
        backgroundColor: "#3b4353 !important",
        color: "white !important",
      },
      "&.MuiFilledInput-underline:before": {
        borderBottom: "2px solid #6f7b9b !important",
      },
      "&.MuiFilledInput-underline:after": {
        borderBottom: "2px solid #258b9e !important",
      },
    },
  },
  message: {
    "& > *": {
      marginBottom: '15px',
      backgroundColor: "#3b4353 !important",
      color: "white !important",
      "&:hover": {
        backgroundColor: "#3b4353 !important",
        color: "white !important",
      },
      "&.Mui-focused": {
        backgroundColor: "#3b4353 !important",
        color: "white !important",
      },
      "&.MuiFilledInput-underline:before": {
        borderBottom: "2px solid #6f7b9b !important",
      },
      "&.MuiFilledInput-underline:after": {
        borderBottom: "2px solid #258b9e !important",
      },
    },
  },
  submit: {
    "&": {
      backgroundColor: "#39b175 !important",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#6de9ab !important",
        boxShadow: "none",
      },
    },
    "& > *": {
      color: "white",
      fontSize: "15px",
      fontWeight: "600",
    },
  },
}));

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [emailText, setEmailText] = useState("");
  const [messageText, setMessageText] = useState("");

  const classes = useStyles();

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setEmailText("");
        setMessageText("");
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  const handleEmailChange = (event) => {
    const input = String(event.target.value);
    setEmailText(input);
  };

  const handleMessageChange = (event) => {
    const input = String(event.target.value);
    setMessageText(input);
  };

  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        onSubmit={submitForm}
        action="https://formspree.io/f/xdorpzae"
        method="POST"
      >
        <TextField
          className={classes.email}
          type="email"
          name="email"
          label="Email"
          value={emailText}
          onChange={handleEmailChange}
          variant="filled"
        />
        <TextField
          className={classes.message}
          type="text"
          name="message"
          label="Message"
          value={messageText}
          onChange={handleMessageChange}
          multiline
          rows="5"
          variant="filled"
        />
        {status === "SUCCESS" ? (
          <p className="email-success">Thanks!</p>
        ) : (
          <Button className={classes.submit} type="submit" variant="contained">
            Submit
          </Button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    </div>
  );
};

export default ContactForm;
