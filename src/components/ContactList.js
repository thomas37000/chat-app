import React, { Component } from 'react';
import './Components.css';
import PropTypes from 'prop-types';


const users = [
    {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false
    },
    {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
    },
    {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
    },
    {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
    },
    {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true
    }
];

function ContactList() {
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
}

ContactList.proptTypes = {
    user: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
}

export default ContactList