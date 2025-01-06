import React from 'react';

const Sidebar = () => {
  const contacts = ['Alice', 'Bob', 'Charlie', 'David']; // Example contacts

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h5>Chatify</h5>
      </div>
      <ul className="list-group sidebar-contacts">
        {contacts.map((contact, index) => (
          <li key={index} className="list-group-item">
            {contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
