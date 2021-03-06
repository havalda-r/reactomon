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
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#ffff80',
          border: '5px solid black',
          borderRadius: '25px',
          margin: '2%',
          padding: '2%',
        }}
      >
        {this.state.pokemons.map((pokemon, index) => (
          <PokemonListItem url={pokemon.url} name={pokemon.name} key={index} />
        ))}
      </div>
    );
  }
}

export default PokemonList;
