import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  getG(){
    return 'Hello';
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.getG()}</h1>
        </header>
      </div>
    );
  }
  
}

export default App;
