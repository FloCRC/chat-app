import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

export default function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="h-screen bg-orange-100">
      <Nav />
      <div className="flex justify-center h-4/5 w-full mt-10">
        {user ? (<ChatBox />) : (<Welcome />)}
      </div>
    </div>
  )
}