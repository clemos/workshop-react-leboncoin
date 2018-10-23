import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Recherche extends Component {
  state = {
    value: ""
  }

  // déclenché quand le texte change
  handleChange = event =>
    this.setState({
      value: event.target.value
    });

  // déclenché au clic sur le bouton rechercher
  handleSearch = event => 
    // on doit passer une fonction "onSearch" dans les props, 
    // à laquelle on passe le contenu du champ
    this.props.onSearch( this.state.value );

  render() {
    return (
      <div>
        <input 
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleSearch}
        >
          Rechercher
        </button>
      </div>
    )
  }
}

class App extends Component {

  state = {
    requete: "",
    resultats: []
  }

  handleSearch = terme =>
    window.alert("TODO: rechercher ce terme " + terme);

  render() {
    return (
      <div className="App">
        <h1>Recherche de films</h1>
        <Recherche 
          onSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;
