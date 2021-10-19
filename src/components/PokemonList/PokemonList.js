import React, { Component } from 'react';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [{ name: 'first' }, { name: 'second' }, { name: 'third' }],
    };
  }

  render() {
    return (
      <div>
        {this.state.pokemons.map((pokemon) => (
          <h1>{pokemon.name}</h1>
        ))}
      </div>
    );
  }
}

export default PokemonList;
