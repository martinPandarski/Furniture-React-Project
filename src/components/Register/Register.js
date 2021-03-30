import React, {useRef, useState} from 'react'
import {Link, useHistory} from 'react-router-dom';

import { Card, Form, Input, Button, Error } from "../AuthForms/AuthForms";
import {useAuth} from '../../context/auth'

function Register(){
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

    async function handleSubmit(e) {
      e.preventDefault()
  
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
        setError("Failed to create an account")
      }
  
      setLoading(false)
    }
    return(
      <Card>
      <h2>Register</h2>
      <Form>
        <Input
          type="emailAddress"
          ref={emailRef}
          placeholder="Email"
        />
        <Input
          type="password"
          ref={passwordRef}
          placeholder="Password"
        />
        <Input
          type="password"
          ref={passwordConfirmRef}
          placeholder="Repeat password"
        />
        
        <Button disabled={loading} onClick={handleSubmit}>Sign In</Button>
      </Form>
        { error &&<Error>{error}</Error> }
        

    </Card>
    )
}

export default Register

