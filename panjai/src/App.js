import logo from './logo.svg';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App1 container">
      <h1>User information</h1>
      <div>
        <form action="/user" method="POST">
          <div>
            <label>Username:</label>
            <input type="text" name="Username" placeholder="Enter name"></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="text" name="Password" placeholder="Enter Password"></input>
          </div>
          <div>
            <label>Comfirm Password:</label>
            <input type="text" name="CPassword" placeholder="Comfirm Password"></input>
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
