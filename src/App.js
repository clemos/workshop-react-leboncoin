import React, { Component } from 'react';
import './App.css';
import Recherche from './Recherche.js';
import { rechercher } from './api';

function Resultat({resultat}) {
  console.log('Resultat', resultat);
  if( !resultat ) {
    return <p>pas de resultat</p>
  }

  return (
    <div>
      <h1>{resultat.Title}</h1>
      <p>{resultat.Plot}</p>
      <img src={resultat.Poster} />
    </div>
  )
}

class App extends Component {

  state = {
    resultat: null
  }

  handleSearch = terme =>
    rechercher(terme)
      .then( resultat => 
        this.setState({
          resultat
        })  
      )

  render() {
    return (
      <div className="App">
        <h1>Recherche de films</h1>
        <Recherche 
          onSearch={this.handleSearch}
        />
        <Resultat resultat={this.state.resultat} />
      </div>
    );
  }
}

export default App;
