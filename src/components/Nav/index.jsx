import { useState } from "react"

export default function Nav() {

    const [user, setUser] = useState(false)

    function signIn() {
        setUser(true)
    }

    function signOut() {
        setUser(false)
    }

    return (
        <>
            <nav>
                <h1>Web Chat</h1>
                {user ? (
                    <button onClick={signOut}>Sign Out</button>
                ) : (
                        <button onClick={signIn}>Sign In with Google</button>
                )}
            </nav>
        </>
    )
}