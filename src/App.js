import React, { Component } from 'react';
import './App.css';
import Recherche from './Recherche.js'

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
