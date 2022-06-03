import React, { useState, useRef } from "react";
import SignOut from "./SignOut";
import {
  query,
  orderBy,
  limit,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MyMessage from "./MyMessage";
import { auth, db } from "../firebase";
import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

const ChatBox = () => {
  const scroll = useRef();
  const [msg, setMsg] = useState("");

  const usersCollectionRef = collection(db, "chat-messages");
  const q = query(usersCollectionRef, orderBy("createdAt"), limit(20));
  const [messages] = useCollectionData(q, { idField: "id" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(usersCollectionRef, {
      text: msg,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="messageBox">
        {messages &&
          messages.map((msgs) => (
            <MyMessage key={msgs.id} {...msgs} scroll={scroll} />
          ))}
        <div ref={scroll}></div>
      </main>
      <div className="bottom">
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Enter Message..."
            variant="outlined"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button
            variant="contained"
            endIcon={<Send />}
            type="submit"
            disabled={!msg}
          >
            Send
          </Button>
        </form>
        <SignOut />
      </div>
    </>
  );
};

export default ChatBox;
