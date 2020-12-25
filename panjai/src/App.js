import logo from './logo.svg';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {

  const [userList, setUserList] = useState([]);

  const getUsers = () =>{
    axios.get('http://localhost:3001/user').then((response) =>{
      setUserList(response.data)
    });
  }

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
        <div>
          <button onClick={getUsers}>Show employees</button>

          {userList.map((val, key) => {
            return(
              <div>
                <div>
                  <p>Username: {val.username}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
