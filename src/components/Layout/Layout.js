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
          color: 'white',
          position: 'sticky',
          marginTop: 'auto',
          bottom: '0',
          width: 'auto',
          borderTop: '3px solid black',
          background: '#d10000',
        }}
      >
        <p>
          &copy; 2021 Reactomon | All rights reserved | Terms of Service |
          Privacy
        </p>
      </footer>
    </div>
  );
};

export default layout;
