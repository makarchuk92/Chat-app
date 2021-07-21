import React from 'react'

export const MyMessage = ({message}) => {
    if(message?.attachments?.length > 0) {
        return (
            <img className="message-image" style={{float:'right'}}
            src={message.attachments[0].file} alt="message-attachment" />
        )
    }
    return (
        <div className="message"
            style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}
        >
            {message.text}
        </div>
    )
}