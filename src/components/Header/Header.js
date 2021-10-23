import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/logo.png';

const header = () => {
  return (
    <header
      style={{
        position: 'sticky',
        top: '0',
        background: 'black',
      }}
    >
      <img src={logo} alt='logo' style={{ width: '20%' }} />
      <Navbar />
    </header>
  );
};

export default header;
