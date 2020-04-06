import React, { Component } from 'react';
import './Components.css';

function ContactList({name, avatar, online}) {
  
    return (
      <div className="Contact">
        <img
          className="avatar"
          src={avatar}
          alt={name}
        />
        <div>
          <p className="name">{name}</p>
          <div className="status">
            <div className={online ? "status-online" : "status-offline" } />
            <p className="status-text">{online ? "online" : "offline" }</p>
          </div>
        </div>
      </div>
    );
  }

  export default ContactList

  /*function ContactList() {
    return (
        <div className="Contact">
            <ul>{
                users.map(user => (
                    <li key={user.id}>
                        <p className="name">{user.name}</p>
                        <img className="avatar" src={user.avatar} alt={user.name} />
                       
                        <div className="status">
                            <div className={user.online ? "status-online" : "status-offline" } />
                            <p className="status-text">{user.status ? "online" : "offline" }</p>
                        </div> 
                    </li>))
                }
            </ul>
        </div>
    );
}*/