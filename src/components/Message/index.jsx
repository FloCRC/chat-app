import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Message({ message }) {

    const [user] = useAuthState(auth)

    return (
        <>
            <div className={`bg-green-100 flex flex-col w-[600px] p-2 ${message.uid == user.uid ? "items-end" : "items-start"}`}>
                <img src={message.avatar} className="w-10 h-10" />
                <div className={`rounded shadow-md my-2 p-2 flex flex-col ${message.uid == user.uid ? "items-end bg-gray-200" : "items-start bg-white"}`}>
                    <p className="font-bold">{message.name}</p>
                    <p>{message.text}</p>
                </div>
            </div>
        </>
    )
}