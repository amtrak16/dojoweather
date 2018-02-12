import React, { Component } from 'react';
import './App.css';
import { NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import City from './City';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">

            <h1 className="App-title">Dojo Weather Forecast</h1>
            <div>
              <ul>
                {this.props.cities.map((city) => (
                  <p key={city}><NavLink to={`/${city}`}>{city}</NavLink></p>
                ))}
              </ul>
            </div>

          </header>
          <Switch>
          <Route path="/:cityName" component={City} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps)(App);
