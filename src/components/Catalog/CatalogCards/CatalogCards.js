import {ProductCard} from 'react-ui-cards'

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
    url='localhost:3000/reviews'
  />
  );
};

export default CatalogCards;