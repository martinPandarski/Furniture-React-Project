import React, {useRef, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { Card, Form, Input, Button, Error } from "../AuthForms/AuthForms";
import {useAuth} from '../../context/auth';


const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
   
    return(
        <Card>
        <h2>Login</h2>
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
        <Button disabled={loading} onClick={handleSubmit}>Sign In</Button>
      </Form>
      <Link to="/register">Don't have an account?</Link>
        { error &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
    )
}

export default Login;
