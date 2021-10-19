import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Layout>
            <Switch>
              <Route
                path='/pokemons'
                exact
                render={() => <h1>PokémonList component placeholder</h1>}
              />
              <Route
                path='/pokemons/:pokemonId'
                exact
                render={() => <h1>PokémonDetail component placeholder</h1>}
              />
              <Route
                path='/types'
                exact
                render={() => <h1>TypeList component placeholder</h1>}
              />
              <Route
                path='/'
                exact
                render={() => <h1>Home page placeholder</h1>}
              />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
