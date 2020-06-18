import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  SimpleButton
} from '@terrestris/react-geo';

import 'antd/dist/antd.css';
//import './react-geo.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

          <SimpleButton
            onClick={() => {alert('Hello World!');}}
            icon="bars"
          />
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
  );
}

export default App;
