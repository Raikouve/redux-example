import React, { Component } from 'react';
import PersonInfo from './components/PersonInfo';
import Sidebar from './components/Sidebar';
import '../src/styles/mainPage.css';

class App extends Component {
  render() {
    return (
      <main className="main-page" >
        <Sidebar />
        <PersonInfo />
      </main>
    )
  }
}

export default App;