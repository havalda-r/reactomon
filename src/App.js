import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import TypeList from './components/TypeList/TypeList';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Layout>
            <Switch>
              <Route path='/pokemons' exact component={PokemonList} />
              <Route
                path='/pokemons/:pokemonId'
                exact
                component={PokemonDetail}
              />
              <Route path='/types' exact component={TypeList} />
              <Route
                path='/'
                exact
                render={() => (
                  <div>
                    <h1>Home page</h1>
                    <p>This is a basic React app using Pokemon API.</p>
                  </div>
                )}
              />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
