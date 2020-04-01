import React from 'react'
import './Components.css'

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/men/34.jpg"
        alt="Pierr Paul Jack"
      />
      <div>
        <p className="name">Pierre Paul Jack</p>
        <div className="status">
          <div className="status-online" />
          <p className="status-text">online</p>
        </div>
      </div>
    </div>
  );
}

/*
const name = "PierrePaulJack"
const avatar = "https://randomuser.me/api/portraits/men/34.jpg"
const status = true
*/

/*
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
*/

export default Contact