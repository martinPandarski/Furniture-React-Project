import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import api from '../../services/api'
function Register(props){
  const [state, setstate] = useState({
      email: '',
      password: ''
  });
  const handleChange = (e) =>{
       const {id, value} = e.target
       setstate(prevState => ({
           ...prevState,
           [id] : value
       }))
  };
  const handleSubmitClick = (e) => {
      e.preventDefault();
    //   if(state.password === state.confirmPassword){
    //       sendDetailsToServer()
    //   }else{
    //       props.showError('Passwords do not match.')
    //   }
    sendDetailsToServer()
  }
  const sendDetailsToServer = () => {
    if(state.email.length && state.password.length) {
        // props.showError(null);
        const payload={
            "email":state.email,
            "password":state.password,
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
                setstate(prevState => ({
                    ...prevState
                }))
            }
        })
        .catch(err => {
            console.log(err)
        })
        
    } else {
        props.showError('Please enter valid username and password')    
    }
    
}
    return(
        <Form>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" id="email" value={state.email} onChange={handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" id="password" value={state.password} onChange={handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleSubmitClick}>
    Submit
  </Button>
</Form>
    )
}

export default Register

