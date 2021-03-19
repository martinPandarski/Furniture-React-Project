
import {Card, Button} from 'react-bootstrap'
import './CatalogCards.css'
const CatalogCards = ({ name, description, pictureLink, pricePerOne }) => {
  return(
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pictureLink} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  );
};

export default CatalogCards;