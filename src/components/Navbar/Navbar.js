import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
      <Link to='/pokemons'>
        <button
          style={{
            //backgroundColor: '#f44336',
            background: '#d10000',
            borderColor: '2px solid white',
            color: 'white',
            padding: '16px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '14px 12px 0px 12px',
            cursor: 'pointer',
            width: '150px',
          }}
        >
          Pokémons
        </button>
      </Link>

      <Link to='/types'>
        <button
          style={{
            //backgroundColor: '#f44336',
            background: '#d10000',
            borderColor: '2px solid white',
            color: 'white',
            padding: '16px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '14px 12px 0px 12px',
            cursor: 'pointer',
            width: '150px',
          }}
        >
          Types
        </button>
      </Link>
    </div>
  );
};

export default navbar;
