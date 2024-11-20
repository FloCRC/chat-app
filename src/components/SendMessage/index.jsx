import { useState } from "react";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function SendMessage() {

    const [message, setMessage] = useState('')

    function updateMessage(e) {
        setMessage(e.target.value)
    }

    async function sendMessage(e) {
        e.preventDefault()
        if (message.trim() === '') {
            alert("Please enter a message.")
            return
        }
        const { uid, displayName, photoURL } = auth.currentUser
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        })
        setMessage('')
    }

    return (
        <>
            <form onSubmit={sendMessage} className="flex flex-col w-full">
                <label htmlFor="message">Enter Message:</label>
                <textarea id="message" name="message" value={message} onChange={updateMessage} placeholder="Type message here ..." className="p-1 m-1"></textarea>
                <button type="submit" className="border border-black px-2 py-1 bg-green-100 hover:bg-orange-300 hover:shadow-inner">Send</button>
            </form>
        </>
    )
}