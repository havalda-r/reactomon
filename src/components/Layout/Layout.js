import React from 'react';
import Header from '../Header/Header';

const layout = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default layout;
