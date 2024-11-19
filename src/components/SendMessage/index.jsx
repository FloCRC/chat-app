export default function SendMessage() {

    return (
        <>
            <form className="flex flex-col w-full">
                <label htmlFor="message">Enter Message:</label>
                <textarea id="message" name="message" placeholder="Type message here ..." className="p-1 m-1"></textarea>
                <button type="submit" className="border border-black px-2 py-1 bg-green-100 hover:bg-orange-300 hover:shadow-inner">Send</button>
            </form>
        </>
    )
}