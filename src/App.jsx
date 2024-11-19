import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

export default function App() {

  const [user] = useAuthState(auth)

  return (
    <>
      <Nav />
      <div className="flex justify-center h-screen w-full bg-orange-100">
        {user ? (<ChatBox />) : (<Welcome />)}
      </div>
    </>
  )
}