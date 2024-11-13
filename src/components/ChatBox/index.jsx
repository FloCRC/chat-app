import Message from "../Message";
import SendMessage from "../SendMessage";

export default function ChatBox() {

    return (
        <>
            <div>
                <div>
                    <Message />
                </div>
                <SendMessage />
            </div>
        </>
    )
}