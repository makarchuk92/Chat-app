import React, { useState } from 'react'
import axios from 'axios'



const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = {
            'Project-ID': 'ba27125f-1056-440d-92d6-8b9b72a30681',
            'User-Name': username,
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
            setError('')
        } catch (err) {
            setError('incorrect credentials!!!')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Username" required
                        value={username} onChange={e => setUsername(e.target.value)} />
                    <input type="password" className="input" 
                        value={password} onChange={e => setPassword(e.target.value)} placeholder="Pasword" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}


export default LoginForm