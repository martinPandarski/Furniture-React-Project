import React, {useRef} from 'react'
import {Form, Col, InputGroup, Button} from 'react-bootstrap';
import {useAuth} from '../../../context/auth'
import {auth} from '../../../firebase';

export default function EditProfile() {
   
    const usernameRef = useRef()
    const phoneNumberRef = useRef()
    const profilePictureRef = useRef()

    const { currentUser } = useAuth()
    
    function handleSubmit(e) {
        e.preventDefault()
        var user = auth.app.auth().currentUser;
        user.updateProfile({
            displayName : usernameRef.current.value,
            phoneNumber : phoneNumberRef.current.value,
            photoURL : profilePictureRef.current.value
            
        })
    }
    return (
        <div>
        <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail" disabled>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" disabled placeholder= {currentUser.email ? currentUser.email : ''}  />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder={currentUser.displayName ? currentUser.displayName : 'Add a username'} ref={usernameRef}/>
          </Form.Group>
        </Form.Row>
      
        <Form.Group controlId="formGridPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder={currentUser.phoneNumber ? currentUser.phoneNumber : 'Add a phone number'} ref={phoneNumberRef} />
        </Form.Group>
      
        <Form.Row>
          <Form.Group as={Col} controlId="formGridProfilePicture">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control placeholder="Add a new profile picture link" ref={profilePictureRef}/>
          </Form.Group>
        </Form.Row>
      
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </div>
    )
}
