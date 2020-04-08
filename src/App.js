import React, { Component, useReducer } from 'react';
import './App.css';
import Contact from './components/Contact';

const users = [
  {
    name: 'Pierre Dupont',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    online: true
  },
  {
    name: 'Paul Dubois',
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    online: false
  },
  {
    name: 'Emilie Jolie',
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    online: true
  },
  {
    name: 'Jack Dupiat',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    online: true
  },
  {
    name: 'Maximilien Laporte',
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    online: false
  },
  {
    name: 'Julie Poullarde',
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    online: false
  }
];

class App extends Component {

  render() {
    return (
      <div className="App">
        {users.map(user => (             
          <Contact {...user} />))}
      </div>
    );
  }
}

export default App;
