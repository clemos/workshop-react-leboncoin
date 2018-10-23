import React, { Component } from 'react';

export default class Recherche extends Component {
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