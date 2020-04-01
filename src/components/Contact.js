import React, { Component } from 'react'
import './Components.css'

const name = "PierrePaulJack"
const avatar = "https://randomuser.me/api/portraits/men/34.jpg"
const status = true

/*
function Contact() {
    //let status = props.status-online ? 'status - Online' : "status - Offline";
    
}
*/


class Contact extends Component {
    render() {
        return <div className="Contact">
        <img className="avatar" src={avatar} />
        
        <div>
          <h4 className="name">{name}</h4>
          <p className="status">
              <button className="status-online"></button>
              {status ? "Online" : "Offline"}
         </p>
        </div>
        
      </div> 
    }   
}


export default Contact