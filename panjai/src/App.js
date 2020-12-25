import logo from './logo.svg';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import React from 'react';
import './App.css';


function App() {
  const signUserIn = async response => {
    console.log('Res -->', response)
    const { name, email, accessToken, userID } = response
    const user = { name, email, accessToken, userId: userID }

    await axios({
      method: 'post',
      url: 'http://localhost:8000/signin/facebook',
      data: {
        user
      }
    })
  }

  return (
    <div className='App'>
      <div>
        <FacebookLogin
          appId='771047717101312'
          fields='name,email'
          scope='public_profile, email'
          callback={signUserIn}
        />
      </div>
    </div>
  )
}

export default App;
