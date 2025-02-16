import React from 'react';

const ChatMessage = ({ message }) => {
    const messageClass = message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600 text-black dark:text-white';

    return (
        <div className={`p-2 rounded-lg ${messageClass}`}>
            {message.text}
        </div>
    );
};

export default ChatMessage;
