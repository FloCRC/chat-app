import { useState } from "react";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";

export default function App() {

  const [user, setUser] = useState(false)

  return (
    <>
      <Nav />
      {!user ? (
        <Welcome />
      ) : (
        <ChatBox />
      )}
    </>
  )
}