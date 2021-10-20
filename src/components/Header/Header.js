import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/logo.png';

const header = () => {
  return (
    <header>
      <img src={logo} alt='logo' style={{ width: '25%' }} />
      <Navbar />
    </header>
  );
};

export default header;
