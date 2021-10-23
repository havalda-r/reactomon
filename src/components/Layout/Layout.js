import React from 'react';
import Header from '../Header/Header';

const layout = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '100%',
      }}
    >
      <Header style={{ flex: '1' }} />
      <main style={{ flex: '1', background: '#c4ebf1', height: 'auto' }}>
        {props.children}
      </main>
      <footer
        style={{
          position: 'sticky',
          marginTop: 'auto',
          bottom: '0',
          padding: '2em',
          width: 'auto',
          background: 'green',
        }}
      >
        FOOTER
      </footer>
    </div>
  );
};

export default layout;
