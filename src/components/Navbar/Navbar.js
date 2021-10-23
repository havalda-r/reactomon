import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
      <button
        style={{
          //backgroundColor: '#f44336',
          background: '#d10000',
          color: '2px solid white',
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
        <Link to='/pokemons'>Pokémons</Link>
      </button>

      <button
        style={{
          //backgroundColor: '#f44336',
          background: '#d10000',
          color: '2px solid white',
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
        <Link to='/types'>Types</Link>
      </button>
    </div>
  );
};

export default navbar;
