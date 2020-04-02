import React, { Component } from 'react'
import './Components.css'
import PropTypes from 'prop-types';

function Contact(props) {
  
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={props.avatar}
        alt={props.name}
      />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div className={props.status ? "status-online" : "status-offline" } />
          <p className="status-text">{props.status ? "online" : "offline" }</p>
        </div>
      </div>
    </div>
  );
}

Contact.proptTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
}

export default Contact