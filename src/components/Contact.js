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
  name: PropTypes.string,
  avatar: PropTypes.string,
  status: PropTypes.bool}

/*const onOff = props => {
    if (props.status ? "Online" : "Offline") {
       return <div style={{backgroundColor:"#aed581"}}>
         
       </div>
       } else {
         return <div style={{backgroundColor:"#f4511"}}>

         </div>
      }
   };*/

  /* const isOnline = (props) => {
    if (props.status) {
      <div className={props.status-online} />
    } else {
      <div className={props.status-offline} />
    }
   };*/ 

/*class Contact extends Component {
  render() {
    return <div className="Contact">
      <img className="avatar" src={this.props.avatar} />
      <div>
        <p className="name">{this.props.name}</p>
        <div className="status">
          <div className="status-online" />
          <p className="status-text">{this.props.status ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  }
}*/

export default Contact