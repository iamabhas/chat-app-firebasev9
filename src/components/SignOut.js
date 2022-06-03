import React from "react";
import { auth } from "../firebase";
import { Button } from "@mui/material";
function SignOut() {
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          auth.signOut();
        }}
      >
        Log Out
      </Button>
    </>
  );
}

export default SignOut;
