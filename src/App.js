import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function MonCadre(props) {
  return (
    <div style={{border: "1px solid red"}}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

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
        <MonCadre title="Cadre 1 !">
          <p>regardez mon site</p>
          <a href="https://silexlabs.org">ici</a>
        </MonCadre>
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
