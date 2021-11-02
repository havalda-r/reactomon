import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <header
      style={{
        padding: '15px',
        position: 'sticky',
        top: '0',
        background: '#d10000',
        borderBottom: '3px solid black',
      }}
    >
      <Link to='/'>
        <img
          src={logo}
          alt='logo'
          style={{ width: '15%', cursor: 'pointer' }}
        />
      </Link>
      <Navbar />
    </header>
  );
};

export default header;
