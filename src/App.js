import React, { Component, useReducer } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Contact name="Pierre"
          avatar="https://randomuser.me/api/portraits/men/34.jpg"
          status />
        <Contact name="Paul"
          avatar="https://randomuser.me/api/portraits/men/2.jpg"
        />
        <Contact name="wendy"
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
          status />
        <ContactList />
      </div>
    );
  }
}

export default App;
