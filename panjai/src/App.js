import logo from './logo.svg';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';
import { Provider } from "react-redux";
import PostPanjai from "./PostPanjai";
import { store } from "./action/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography
            variant="h2"
            align="center">
            Post Box
          </Typography>
        </AppBar>
        <PostPanjai />
        <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
      </Container>
    </Provider>
  );
}

// function App() {

//   const [userList, setUserList] = useState([]);

//   const getUsers = () =>{
//     axios.get('http://localhost:3001/user').then((response) =>{
//       setUserList(response.data)
//     });
//   }

//   return (
//     <div className="App1 container">
//       <h1>User information</h1>
//       <div>
//         <form action="/user" method="POST">
//           <div>
//             <label>Username:</label>
//             <input type="text" name="Username" placeholder="Enter name"></input>
//           </div>
//           <div>
//             <label>Password:</label>
//             <input type="text" name="Password" placeholder="Enter Password"></input>
//           </div>
//           <div>
//             <label>Comfirm Password:</label>
//             <input type="text" name="CPassword" placeholder="Comfirm Password"></input>
//           </div>
//           <div>
//             <button type="submit">Register</button>
//           </div>
//         </form>
//         <div>
//           <button onClick={getUsers}>Show employees</button>

//           {userList.map((val, key) => {
//             return(
//               <div>
//                 <div>
//                   <p>Username: {val.username}</p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }


// function App() {
//   const signUserIn = async response => {
//     console.log('Res -->', response)
//     const { name, email, accessToken, userID } = response
//     const user = { name, email, accessToken, userId: userID }

//     await axios({
//       method: 'post',
//       url: 'http://localhost:8000/signin/facebook',
//       data: {
//         user
//       }
//     })
//   }

//   return (
//     <div className='App'>
//       <div>
//         <FacebookLogin
//           appId='771047717101312'
//           fields='name,email'
//           scope='public_profile, email'
//           callback={signUserIn}
//         />
//       </div>
//     </div>
//   )
// }


export default App;
