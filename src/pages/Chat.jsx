import React, { useState, useEffect, useRef } from 'react';
import { generateContent } from '../services/geminiService';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [prompt, setPrompt] = useState('');
    const messagesEndRef = useRef(null);

    const sendMessage = async () => {
        if (prompt.trim() !== '') {
            const newMessage = { text: prompt, sender: 'user' };
            setMessages([...messages, newMessage]);
            setPrompt('');

            // Call Gemini API
            const geminiResponse = await generateContent(prompt);

            if (geminiResponse.response) {
                const geminiMessage = { text: geminiResponse.response, sender: 'gemini' };
                setMessages(prevMessages => [...prevMessages, geminiMessage]);
            } else {
                const errorMessage = { text: `Error: ${geminiResponse.error}`, sender: 'gemini' };
                setMessages(prevMessages => [...prevMessages, errorMessage]);
            }
        }
    };

    const handleInputChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-800">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Chat
            </h1>
            <div className="flex flex-col w-full max-w-md p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                {messages.map((message, index) => (
                    <div key={index} className={`p-2 my-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600 text-black dark:text-white'}`}>
                        {message.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
                <textarea
                    type="text"
                    value={prompt}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ height: '100px' }}
                />
                <button onClick={sendMessage} className="w-full p-2 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chat;