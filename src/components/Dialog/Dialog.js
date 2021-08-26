import React, { forwardRef } from "react";
import Card from "@material-ui/core/Card";
import "./Dialog.scss";
import FlipMove from "react-flip-move";

const Dialog = forwardRef(({ messages }, ref) => {
  const messagesList = messages.map(({ id, data }) => {
    return (
      <div className="message-item">
        <Card
          key={id}
          ref={ref}
          className={
            data.username?.toLowerCase() === "nizami"
              ? "message message-admin"
              : "message"
          }
        >
          <h4>{data.message}</h4>
        </Card>
        <h6
          className={
            data.username?.toLowerCase() === "nizami" && "message-admin-lbl"
          }
        >
          {data.username.toUpperCase()[0] +
            data.username.slice(1, data.username.length).toLowerCase()}
        </h6>
      </div>
    );
  });

  return (
    <div className="dialog">
      <FlipMove>{messagesList}</FlipMove>
    </div>
  );
});

export default Dialog;
