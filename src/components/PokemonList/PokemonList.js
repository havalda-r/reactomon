import React, { Component } from 'react';
import PokemonListItem from './PokemonListItem/PokemonListItem';
import axios from 'axios';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => this.setState({ pokemons: response.data.results }));
    //.then((response) => console.log(response.data.results));
  }

  render() {
    return (
      <div>
        {this.state.pokemons.map((pokemon, index) => (
          <PokemonListItem name={pokemon.name} key={index} />
        ))}
      </div>
    );
  }
}

export default PokemonList;
