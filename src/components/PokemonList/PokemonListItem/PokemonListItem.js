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
      <h1
        style={{
          display: 'inline-block',
          width: '20%',
          margin: '10px',
          height: 'auto',
          background: '#ce8888',
        }}
      >
        <Link to={`pokemons/${this.state.pokemon.id}`}>{this.props.name}</Link>
      </h1>
    ) : null;
  }
}

export default PokemonListItem;
