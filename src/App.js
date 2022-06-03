import "./index.css";
import ChatBox from "./components/ChatBox";
import SignIn from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { Alert } from "@mui/material";
import { LinearProgress } from "@mui/material";
function App() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <LinearProgress />;
  }
  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  return <>{user ? <ChatBox /> : <SignIn />}</>;
}

export default App;
