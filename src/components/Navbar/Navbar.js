import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
      <button>
        <Link to='/pokemons'>Pokémons</Link>
      </button>

      <button>
        <Link to='/types'>Types</Link>
      </button>
    </div>
  );
};

export default navbar;
