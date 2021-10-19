import axios from 'axios';
import React, { Component } from 'react';

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
    return <h1>{this.props.name}</h1>;
  }
}

export default PokemonListItem;
