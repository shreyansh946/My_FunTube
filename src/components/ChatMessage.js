import React from 'react'

const ChatMessage = ({ name, Message }) => {

    return (
        <div className='flex items-center'>
            <img 
                className='h-12 px-2'
                src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                alt='user-icon'
            />
            <span className='px-2 font-bold'>{name}</span>
            <span className='px-2 font-semibold'>{Message}</span>
        </div>
    )
}

export default ChatMessage