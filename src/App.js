import React, { Component, useReducer } from 'react';
import './App.css';
import ContactList from './components/ContactList';
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

class App extends Component {

  render() {
    return (
      <div className="App">
        {users.map(user => (             
          <ContactList {...user} />))}
      </div>
    );
  }
}

export default App;
