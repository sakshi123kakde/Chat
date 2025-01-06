import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        className="form-control"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
