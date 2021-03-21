import React, {useState} from 'react'

import api from '../../services/api';
import {Redirect} from 'react-router-dom'
import { Card, Form, Input, Button, Error } from "../AuthForms/AuthForms";

function Register(props){
  const [isRegistered, setRegistered] = useState(false);
  const [isError, setIsError] = useState(false);
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("");


  function postRegister(){
    const payload={
        "email":emailAddress,
        "password":password,
    }
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
}

      if(isRegistered){
        return  <Redirect to="/login"/>
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
        <Button onClick={postRegister}>Sign In</Button>
      </Form>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
    )
}

export default Register

