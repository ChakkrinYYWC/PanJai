import FacebookLogin from 'react-facebook-login';
import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import '../App.css';
import { Provider } from "react-redux";
import PostPanjai from "../components/PostPanjai";
import { store } from "../action/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";

function login() {
/*-----------------------------------------------------------*/
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const checkUser = () => {
        Axios.post('http://localhost:3001/checkUser',{
            username: username,
            password: password,
        })
    }
/*-----------------------------------------------------------*/
    return (
        <div className="container">
        <h1>Login</h1>
        <div>
            <form>
            <div>
                <label>Username:</label>
                <input
                type="text"
                name="Username"
                placeholder="Enter name"
                onChange={(event) =>{
                    setUsername(event.target.value)
                }}
                >
                </input>
            </div>
            <div>
                <label>Password:</label>
                <input
                type="text"
                name="Password"
                placeholder="Enter Password"
                onChange={(event) =>{
                    setPassword(event.target.value)
                }}
                >
                </input>
            </div>
            <div>
                <button onClick={checkUser}>Register</button>
            </div>
            </form>
        </div>
        </div>
    )
}

export default login;