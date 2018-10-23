import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MonChampTexte extends Component {
  state = {
    valeur:"toto"
  };

  handleChange = event => this.setState({
    valeur: event.target.value
  });

  render() {
    return (
      <input 
        value={this.state.valeur} 
        onChange={this.handleChange}
      />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MonChampTexte />
      </div>
    );
  }
}

export default App;
