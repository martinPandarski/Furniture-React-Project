import React, {useState} from 'react'

import api from '../../services/api';
import {Redirect} from 'react-router-dom'
import { Card, Form, Input, Button, Error } from "../AuthForms/AuthForms";

function Register(props){
  const [isRegistered, setRegistered] = useState(false);
  const [isError, setIsError] = useState(false);
  const [notMatchPass, setNotMatchPass] = useState(false)
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("");
    const [rePassword, setRepassword] = useState("");


  function postRegister(){
    const payload={
        "email":emailAddress,
        "password":password,
    }
    if(password === rePassword){
      fetch(api.register,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)   
    })
    .then(res => {
      if(res.status === 200){
        setRegistered(true);
      }else{
        setIsError(true)
      }
       
    })
    .catch(err => {
      setIsError(true)
        
    })
    }else{
      setNotMatchPass(true)
    }
    
}

      if(isRegistered){
        return  <Redirect to="/login"/>
    }
    return(
      <Card>
      <h2>Register</h2>
      <Form>
        <Input
          type="emailAddress"
          value={emailAddress}
          onChange={e => {
            setEmailAddress(e.target.value);
          }}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <Input
          type="password"
          value={rePassword}
          onChange={e => {
            setRepassword(e.target.value);
          }}
          placeholder="Repeat password"
        />
        <Button onClick={postRegister}>Sign In</Button>
      </Form>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
        { notMatchPass &&<Error>Please make sure your passwords match!</Error> }

    </Card>
    )
}

export default Register

