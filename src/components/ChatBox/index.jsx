import Message from "../Message";
import SendMessage from "../SendMessage";
import { query, collection, orderBy, onSnapshot, limit, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

export default function ChatBox() {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(20)
        )

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = []
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id })
            })
            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            )
            setMessages(sortedMessages)
        })
        return () => unsubscribe
    }, [])

    return (
        <>
            <div className="flex flex-col items-start justify-center w-[600px] h-full b-20">
                <div className="overflow-scroll">
                    {messages.map(message => (
                        <Message key={message.id} message={message} />
                    ))}
                </div>
                <SendMessage />
            </div>
        </>
    )
}