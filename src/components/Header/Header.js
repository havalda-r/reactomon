import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/logo.png';

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
      <img src={logo} alt='logo' style={{ width: '15%' }} />
      <Navbar />
    </header>
  );
};

export default header;
