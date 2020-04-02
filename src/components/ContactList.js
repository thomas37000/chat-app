import React, { Component } from 'react';
import './Components.css';
import PropTypes from 'prop-types';

function UsersContact() {
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
  
    return (
        <ul>
            {
              users.map(member => <li Key={member}>{member}</li>)
              users.map(member => <li Key={name}>{name}</li>)
              users.map(member => <li Key={avatar}>{avatar}</li>)
              users.map(member => <li Key={online}>{online}</li>)
            }
      </ul>
  );
  }

export default UsersContact