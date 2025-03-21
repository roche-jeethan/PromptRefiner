import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
            const promptTemplate = `You are an AI prompt optimization specialist. Provide the best response:

${prompt.trim() === '' ? 'Error: Empty prompt' : `INPUT PROMPT:
${prompt}`}`;

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

    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         sendMessage();
    //     }
    // };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col items-center h-screen bg-bgWhite dark:bg-bgDark">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-16 mb-6">
                Refine your Prompts!
            </h1>
            <div className="flex flex-col items-center w-3/4 max-w-2xl mb-6 p-4 bg-transparent dark:bg-transparent rounded-lg shadow-md">
                <label htmlFor="apiKey" className="text-gray-900 dark:text-gray-100 mb-2">
                    Enter your Gemini API Key
                </label>
                <div className="flex flex-col w-full">
                    <div className="flex w-full">
                        <input
                            type="password"
                            id="apiKey"
                            placeholder="Enter your API key"
                            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
                            onChange={(e) => {
                                const apiKey = e.target.value;
                                localStorage.setItem('geminiApiKey', apiKey);
                            }}
                        />
                        <button
                            onClick={() => {
                                const apiKey = localStorage.getItem('geminiApiKey');
                                const verifyApiKey = async (apiKey) => {
                                    try {
                                        const response = await generateContent('test', apiKey);
                                        const messageDiv = document.getElementById('apiKeyMessage');
                                        if (response.error && response.error.includes('API_KEY_INVALID')) {
                                            messageDiv.innerHTML = '<div class="text-sm text-red-500 mt-2 flex items-center"><span class="mr-1">✕</span>Invalid API Key</div>';
                                            return false;
                                        } else if(apiKey === ""){
                                            messageDiv.innerHTML = '<div class="text-sm text-red-500 mt-2 flex items-center"><span class="mr-1">✕</span>Blank Input not allowed</div>';
                                            return false;
                                        }
                                        messageDiv.innerHTML = '<div class="text-sm text-green-600 mt-2 flex items-center"><span class="mr-1">&#10003</span>Valid API Key</div>';
                                        return true;
                                    } catch (error) {
                                        document.getElementById('apiKeyMessage').innerHTML = '<div class="text-sm text-red-500 mt-2 flex items-center"><span class="mr-1">✕</span>Invalid API Key</div>';
                                        return false;
                                    }
                                };
                                verifyApiKey(apiKey);
                            }}
                            className="p-2 bg-black dark:bg-white dark:text-black text-white rounded-lg hover:bg-gray-900"
                        >
                            Verify
                        </button>
                    </div>
                    <div id="apiKeyMessage"></div>
                    <div className="flex flex-col justify-between items-center mt-2">
                        <p className="text-black dark:text-white ">How to get API key? <Link to="/apidocs" className="text-black dark:text-white hover:underline hover:text-gray-800 dark:hover:text-gray-300">Click Here</Link></p>
                        
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-3/4 max-w-2xl mb-4 flex-grow">
                <div className="flex-grow overflow-y-auto p-4 mb-4 bg-transparent dark:bg-transparent rounded-lg shadow-md" style={{ maxHeight: "calc(100vh - 400px)" }}>
                    {messages.map((message, index) => (
                        <div key={index} className={`p-2 my-2 rounded-lg ${message.sender === 'user' ? 'bg-transparent text-black dark:text-white' : 'bg-transparent dark: text-black dark:text-white'}`}>
                            {message.text}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <textarea
                    type="text"
                    value={prompt}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                    placeholder="Type your message... (Shift+Enter for new line)"
                    className="w-full bg-transparent p-2 rounded-lg focus:outline-none focus:ring-2 dark:focus:ring-orange-200 dark:text-white border border-gray-300 dark:border-gray-700"
                    style={{ height: '100px', minHeight: '100px' }}
                />
            </div>
        </div>
    );
}

export default Chat;