import React, { Component } from 'react';
import axios from 'axios';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: null,
    };
  }

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/type')
      .then((response) => this.setState({ types: response.data.results }));
  }

  render() {
    const types = this.state.types;
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
        <h1>Pokémon types:</h1>
        <ul>
          {types ? (
            types.map((type, index) => <li key={index}>{type.name}</li>)
          ) : (
            <h1>Loading...</h1>
          )}
        </ul>
      </div>
    );
  }
}

export default PokemonList;
