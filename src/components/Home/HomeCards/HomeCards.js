import React from "react";
import {Card} from 'react-bootstrap'

const HomeCards = ({type, imageCard}) => {
  return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageCard} />
    <Card.Body>
      <Card.Title>{type}</Card.Title>
    </Card.Body>
    </Card>
  );
};

export default HomeCards;