import React from 'react';
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap';
import {useAuth} from '../../context/auth'

export default function Profile() {
    const { currentUser } = useAuth()
    return (
        <div>
            <>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={currentUser.photoURL} />
  <Card.Body>
    <Card.Title>{currentUser.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{currentUser.email}</Card.Subtitle>
    <Card.Text>
      {currentUser.phoneNumber}
    </Card.Text>
    <Link to="/user/edit-profile">Edit your profile</Link>
    <Link to="/user/orders">Check your orders</Link>
  </Card.Body>
</Card>
</>
        </div>
    )
}
