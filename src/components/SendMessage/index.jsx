export default function SendMessage() {

    return (
        <>
            <form>
                <label htmlFor="message">Enter Message</label>
                <textarea id="message" name="message" placeholder="Type message here ..."></textarea>
                <button type="submit" className="border p-2">Send</button>
            </form>
        </>
    )
}