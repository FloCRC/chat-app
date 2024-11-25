import { auth } from "../../firebase.js"
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../../assets/googleButton.png";

export default function Nav() {

    const [user] = useAuthState(auth)

    function signIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

        function signOut() {
            auth.signOut();
        }

        return (
            <>
                <nav className="border-b border-black flex justify-between items-center px-10 py-2 bg-green-300">
                    <h1 className="text-xl font-bold">WEB CHAT</h1>
                    {user ? (
                        <button onClick={signOut} className="border border-black px-2 py-1 bg-green-100 hover:bg-orange-300 hover:shadow-inner">Sign Out</button>
                    ) : (
                        <button onClick={signIn} className=""><img src={GoogleSignin} /></button>
                    )}
                </nav>
            </>
        )
    }