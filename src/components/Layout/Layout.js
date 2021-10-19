import React from 'react';

const layout = (props) => {
  return (
    <div>
      <header>HEADER</header>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default layout;
