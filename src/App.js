import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function MonBouton(props) {
  return (
    <button 
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <MonBouton 
          title="Cliquez ici"
          onClick={() => window.alert('bonjour')}
        />
        <MonBouton 
          title="Ne cliquez pas ici"
          onClick={() => window.alert('au revoir')}
        />
      </div>
    );
  }
}

export default App;
