import React, { useEffect } from "react";
import "./Messenger.scss";
import Title from "../Title/Title";
import Dialog from "../Dialog/Dialog";
import InputField from "../InputField/InputField";
import { useState } from "react";
import db from "../../firebase";
import { useRef } from "react";

function Messenger() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const divRef = useRef();
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your username"));
  }, []);

  return (
    <main>
      <div className="container">
        <Title />
        <Dialog messages={messages} />
        <InputField username={username} />
        <div ref={divRef} className="end"></div>
      </div>
    </main>
  );
}

export default Messenger;
