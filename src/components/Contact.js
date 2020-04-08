import React, { Component } from 'react';
import './Components.css';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //status: false
      status: props.online
    }
  }

  render() {
    return (
      <div className="Contact">
        <img
          className="avatar"
          src={this.props.avatar}
          alt={this.props.name}
        />
        <div>
          <p className="name">{this.props.name}</p>

          <button className="status" onClick={event => {
            const newStatus = this.state.status;
            this.setState({ status: true });
          }}>
            <div className={this.state.status ? "status-online" : "status-offline"} />
            <p className="status-text">{this.state.status ? "online" : "offline"}</p>
          </button>
        </div>
      </div>
    );
  }
}

/*
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
*/

Contact.proptTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
}

export default Contact 