import React, {useState, useContext} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './CatalogCards.css';

const CatalogCards = ({ itemId, name, introText, pictureLink, pricePerOne }) => {
 
  return(
    <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={pictureLink} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {introText}
    </Card.Text>
   <Link to={`/details/${itemId}`}>Details</Link>
   
    

  </Card.Body>
</Card>
  );
};

export default CatalogCards;