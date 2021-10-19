import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout>
          <main>MAIN CONTENT</main>
        </Layout>
      </div>
    );
  }
}

export default App;
