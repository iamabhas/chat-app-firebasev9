import React from "react";
import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
const SignIn = () => {
  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div>
      <h1>Chat Application by Abhas K</h1>
      <h1 className="alert-msg">This Application isnt mobile responsive...</h1>
      <Button
        variant="contained"
        onClick={() => {
          SignInWithGoogle();
        }}
      >
        Sign In With Google
      </Button>
    </div>
  );
};

export default SignIn;
