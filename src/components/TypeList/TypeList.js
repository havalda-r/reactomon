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
    console.log(this.state.types);
    return (
      <div>
        {this.state.types ? (
          this.state.types.map((type, index) => (
            <h1 key={index}>{type.name}</h1>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default PokemonList;
