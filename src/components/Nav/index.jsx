import { auth } from "../../firebase.js"
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default function Nav() {

    const [user] = useAuthState(auth)

    function signIn() {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    function signOut() {
        auth.signOut();
    }

    return (
        <>
            <nav>
                <h1>Web Chat</h1>
                {user ? (
                    <button onClick={signOut} className="border p-1">Sign Out</button>
                ) : (
                        <button onClick={signIn} className="border p-1">Sign In with Google</button>
                )}
            </nav>
        </>
    )
}