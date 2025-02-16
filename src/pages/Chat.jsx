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

            // Prompt template
            const promptTemplate = `You are an expert prompt refiner. Your task is to improve the given prompt to be clearer, more specific, and more effective for use with large language models. It's okay if it is a very detailed one. When it comes to coding or making projects, ensure you provide project structure and a full plan if asked.

Original Prompt:
${prompt}

Refinement Instructions:


Refined Prompt:`;

            const geminiResponse = await generateContent(promptTemplate);

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
        <div className="flex flex-col items-center h-screen bg-white dark:bg-gray-800">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-16 mb-6">
                Refine your Prompts!
            </h1>
            <div className="flex flex-col w-3/4 max-w-2xl mb-20 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-y-auto">
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