import React, { useState } from 'react'

export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Username" required
                        value={username} onChange={e => setUsername(e.target.value)} />
                    <input type="submit" className="input" placeholder="Password" required
                        value={password} onChange={e => setPassword(e.target.value)} />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}