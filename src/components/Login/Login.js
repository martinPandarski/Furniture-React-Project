import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import { Card, Form, Input, Button, Error } from "../AuthForms/AuthForms";
import api from '../../services/api';

import {useAuth} from '../../context/auth'
function Login(props){
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("");
    const {setAuthTokens } = useAuth();
   
    function postLogin(){
        const payload={
            "login":emailAddress,
            "password":password,
        }
        fetch(api.login,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)   
        })
        .then(res => res.json())
        .then(res => {
                console.log(res["user-token"])
                setAuthTokens(res["user-token"]);
                setLoggedIn(true);
           
        })
        .catch(err => {
            setIsError(true);
        })
    }
    if (isLoggedIn) {
        return <Redirect to="/" />;
      }


    return(
        <Card>
      <Form>
        <Input
          type="emailAddress"
          value={emailAddress}
          onChange={e => {
            setEmailAddress(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/register   ">Don't have an account?</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
    )
}

export default Login