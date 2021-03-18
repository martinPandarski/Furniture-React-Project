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
    rating={3}
  />
  );
};

export default CatalogCards;