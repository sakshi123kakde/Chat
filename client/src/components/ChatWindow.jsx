import React, { useState } from 'react';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Alice', text: 'Hello!' },
    { id: 2, user: 'You', text: 'Hi, Alice!' }
  ]);

  const addMessage = (newMessage) => {
    setMessages([...messages, { id: Date.now(), user: 'You', text: newMessage }]);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h5>Chat with Alice</h5>
      </div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.user === 'You' ? 'sent' : 'received'}`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <MessageInput onSendMessage={addMessage} />
    </div>
  );
};

export default ChatWindow;
