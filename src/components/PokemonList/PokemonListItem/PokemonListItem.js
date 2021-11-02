import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokemonListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }
  componentDidMount() {
    axios
      .get(this.props.url)
      .then((response) => this.setState({ pokemon: response.data }));
  }
  render() {
    return this.state.pokemon ? (
      <Link to={`pokemons/${this.state.pokemon.id}`}>
        <div
          style={{
            border: '2px solid black',
            borderRadius: '25px',
            margin: '10px',
            display: 'inline-block',
            width: '150px',
            height: '150px',
            background: '#fcb103',
          }}
        >
          <img
            src={this.state.pokemon.sprites.front_default}
            alt={this.state.pokemon.name}
          />
          <p>{this.props.name}</p>
        </div>
      </Link>
    ) : null;
  }
}

export default PokemonListItem;
