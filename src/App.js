import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Layout>
            <main>MAIN CONTENT</main>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
