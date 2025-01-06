import React from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import './Chat.css';

const Chat = () => {
  return (
    <div className="chat-app">
      {/* Sidebar for contacts and channels */}
      <Sidebar />
      
      {/* Main Chat Window */}
      <ChatWindow />
    </div>
  );
};

export default Chat;
