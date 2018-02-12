import React, { Component } from 'react';
import './App.css';
import "react-router";
import { Link, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class AddCity extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
    this.onCityIn = this.onCityIn.bind(this)
    this.onCityAdd = this.onCityAdd.bind(this)

  }
}