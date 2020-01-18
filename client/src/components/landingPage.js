import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
const axios = require('axios');

export default class landingPage extends Component {

  componentDidMount() {
    axios.get('/customers').then(results => {
      console.log(results.data);
    })
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}