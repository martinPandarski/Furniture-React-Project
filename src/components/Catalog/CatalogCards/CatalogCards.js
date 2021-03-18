import {ProductCard} from 'react-ui-cards'
import './CatalogCards.css'
const CatalogCards = ({ name, description, pictureLink, pricePerOne }) => {
  return(
    <ProductCard
    photos={[
        pictureLink
    ]}
    price= {pricePerOne + '$'}
    productName= {name}
    description= {description}
    buttonText='Add to cart'
    rating={5}
    url='/google.com'
  />
  );
};

export default CatalogCards;