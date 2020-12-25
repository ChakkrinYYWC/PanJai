import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {

  getG(){
    return 'Hello to React';
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.getG()}</h1>
          {/* <img src={logo} className="App-logo" alt="logo" />
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
          </a> */}
        </header>
      </div>
    );
  }
  
}

export default App;
