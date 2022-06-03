import React from "react";
import { auth } from "../firebase";
function MyMessage({ text, uid, photoURL }) {
  const checkCurrentUserClass =
    uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`messages ${checkCurrentUserClass}`}>
        <img src={photoURL} alt="LOL" />
        <p>{text}</p>
      </div>
    </>
  );
}

export default MyMessage;
