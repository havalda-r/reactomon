import React, { Component } from 'react';
import axios from 'axios';

class PokemonDetail extends Component {
  state = { pokemon: null };

  componentDidMount() {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonId}`
      )
      .then((response) => this.setState({ pokemon: response.data }));
  }
  render() {
    return (
      <div>
        <h1>Pokemon details</h1>
        {this.state.pokemon ? (
          <h1>{this.state.pokemon.name}</h1>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default PokemonDetail;
