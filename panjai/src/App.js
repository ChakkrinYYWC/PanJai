import logo from './logo.svg';
import FacebookLogin from 'react-facebook-login';
import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';
import { Provider } from "react-redux";
import PostPanjai from "./components/PostPanjai";
import { store } from "./action/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";

// function App() {
// /*-----------------------------------------------------------*/
//   const [userList, setUserList] = useState([]);
//   const getUsers = () =>{
//     Axios.get('http://localhost:3001/user').then((response) =>{
//       setUserList(response.data)
//     });
//   }
// /*-----------------------------------------------------------*/
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [CPassword, setCPassword] = useState("");

//   const addUser = () => {
//     Axios.post('http://localhost:3001/createUser',{
//       username: username,
//       password: password,
//       CPassword: CPassword 
//     }).then(() => {
//       setUserList([
//         ...userList,
//         {
//           username: username,
//           password: password,
//           CPassword: CPassword 
//         }
//       ])
//     })
//   }
// /*-----------------------------------------------------------*/
// const [newUsername, setNewUsername] = useState("");

// const updateUser = (id) => {
//   Axios.put("http://localhost:3001/userUpdate", { username: newUsername, id: id }).then((response) => {
//       setUserList(
//         userList.map((val) => {
//           return val._id == id
//             ? {
//                 username: newUsername
//               }
//             : val;
//         })
//       );
//     }
//   );
// };
// /*-----------------------------------------------------------*/
// const removeUser = (Pid) => {
//   Axios.delete('http://localhost:3001/userRemove/'+Pid).then((response) => {
//       console.log(Pid)
//       setUserList(
//         userList.filter((val) =>{
//           return val._id != Pid;
//         })
//       );
//     }
//   );
// };
// /*-----------------------------------------------------------*/
//   return (
//     <div className="App1 container">
//       <h1>User information</h1>
//       <div>
//         <form>
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               name="Username"
//               placeholder="Enter name"
//               onChange={(event) =>{
//                 setUsername(event.target.value)
//               }}
//               >
//             </input>
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="text"
//               name="Password"
//               placeholder="Enter Password"
//               onChange={(event) =>{
//                 setPassword(event.target.value)
//               }}
//               >
//             </input>
//           </div>
//           <div>
//             <label>Comfirm Password:</label>
//             <input
//               type="text"
//               name="CPassword"
//               placeholder="Comfirm Password"
//               onChange={(event) =>{
//                 setCPassword(event.target.value)
//               }}
//               >
//             </input>
//           </div>
//           <div>
//             <button onClick={addUser}>Register</button>
//           </div>
//         </form>
//         <div>
//           <button onClick={getUsers}>Show Users</button>

//           {userList.map((val, key) => {
//             return(
//               <div className="card">
//                 <p>Username: {val.username}</p>
//                 <div>
//                   <input type='text'
//                     placeholder="New username"
//                     onChange={(event) => {
//                       setNewUsername(event.target.value)
//                     }}
//                   >
//                   </input>
//                   <button onClick={() => {updateUser(val._id)}}>Update</button>
//                   <button onClick={() => {removeUser(val._id)}}>Remove</button>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }
// -----------------------Roong------------------------Tawan------------------------
function App(){
  return(
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography
            variant="h2"
            align="center">
            ตู้ปันใจ
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
