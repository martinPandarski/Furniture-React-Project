import React, {useState, useContext} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './CatalogCards.css';
import {CartContext} from '../../../context/CartContext'
const CatalogCards = ({ itemId, name, introText, pictureLink, pricePerOne }) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const product = {name : name, price : pricePerOne, itemId : itemId};
    setCart(currentCart => [...currentCart, product]);

  }
  return(
    <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={pictureLink} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {introText}
    </Card.Text>
   <Link to={`/details/${itemId}`}>Details</Link>
   <button onClick={addToCart}>Add to Cart</button>
    

  </Card.Body>
</Card>
  );
};

export default CatalogCards;