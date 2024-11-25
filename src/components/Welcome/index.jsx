import { auth } from "../../firebase.js"
import GoogleSignin from "../../assets/googleButton.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Welcome() {

    function signIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    return (
        <>
            <div className="flex flex-col items-center pt-32 w-[600px] h-full pb-20">
                <h2 className="text-3xl font-bold p-5">Welcome to Web Chat</h2>
                <p className="p-2">Sign in with Google to chat!</p>
                <button onClick={signIn} className=""><img src={GoogleSignin} /></button>
            </div>
        </>
    )
}