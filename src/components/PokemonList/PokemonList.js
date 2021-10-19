import React, { Component } from 'react';
import PokemonListItem from './PokemonListItem/PokemonListItem';

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
          <PokemonListItem name={pokemon.name} />
        ))}
      </div>
    );
  }
}

export default PokemonList;
