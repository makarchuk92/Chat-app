import { PictureOutlined, SendOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { sendMessage } from 'react-chat-engine'


const MessageForm = (props) => {
    const { chatId, creds } = props

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = value.trim()

        if (text.length > 0) {
            sendMessage(chatId, creds, { text })
        }
        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleUpload = (e) => {
        sendMessage(chatId, creds, {files: e.target.files, text: ''})
    }
 
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input className="message-input" placeholder="Send a message..." 
             value={value} onSubmit={handleSubmit} onChange={handleChange}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input type="file" multiple={false} id="upload-button" style={{ display: 'none' }}
             onChange={handleUpload} />
             <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
             </button>
        </form>
    )
}


export default MessageForm