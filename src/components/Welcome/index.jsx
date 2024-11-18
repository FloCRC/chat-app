export default function Welcome() {

    function signIn() {
    
}

    return (
        <>
            <div>
                <h2>Welcome to Web Chat</h2>
                <p>Sign in with Google to chat</p>
                <button onClick={signIn} className="border p-2">Sign In</button>
            </div>
        </>
    )
}