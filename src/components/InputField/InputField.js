import React, { useState } from "react";
import "./InputField.scss";
import { TextField } from "@material-ui/core";
import db from "../../firebase";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";

function InputField({ username }) {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    input &&
      db.collection("messages").add({
        username: username,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

    setInput("");
  };

  return (
    <div className="input-field">
      <form onSubmit={submitHandler} className="form">
        <div className="d-flex justify-content-center align-items-center">
          <TextField
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="message-input"
            id="standard-basic"
            label="Enter your message..."
          />
          <SendIcon onClick={submitHandler} className="btn-send"></SendIcon>
        </div>
      </form>
    </div>
  );
}

export default InputField;
