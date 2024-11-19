import { auth } from "../../firebase.js"
// import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Welcome() {

    function signIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-[600px] h-full pb-20">
                <h2 className="text-3xl font-bold p-5">Welcome to Web Chat</h2>
                <p className="p-2">Sign in with Google to chat!</p>
                <button onClick={signIn} className="border border-black px-2 py-1 bg-green-100 hover:bg-orange-300 hover:shadow-inner">Sign In with Google</button>
            </div>
        </>
    )
}