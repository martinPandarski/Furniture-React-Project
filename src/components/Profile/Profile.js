import React from 'react';
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap';
import {useAuth} from '../../context/auth'
import './Profile.css'
export default function Profile() {
    const { currentUser } = useAuth()
    return (
        <div>
            <>
            <Card style={{ width: '25rem', 'marginLeft': '35%' }}>
  <Card.Img variant="top" src={currentUser.photoURL} />
  <Card.Body>
    <Card.Title>{currentUser.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{currentUser.email}</Card.Subtitle>
    <Card.Text>
      {currentUser.phoneNumber}
    </Card.Text>
    <Link className='link' to="/user/edit-profile">Edit your profile</Link>
    <Link className='link' to="/user/orders">Check your orders</Link>
  </Card.Body>
</Card>
</>
        </div>
    )
}
