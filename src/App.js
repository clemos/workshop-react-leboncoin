import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function MonBouton(props) {
  return <button>{props.title}</button>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MonBouton title="Cliquez ici" />
      </div>
    );
  }
}

export default App;
