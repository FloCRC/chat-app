import Message from "../Message";
import SendMessage from "../SendMessage";

export default function ChatBox() {

    return (
        <>
            <div className="flex flex-col items-start justify-center w-[600px] h-full pb-20">
                <div>
                    <Message />
                </div>
                <SendMessage />
            </div>
        </>
    )
}