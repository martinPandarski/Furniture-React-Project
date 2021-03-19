
import style from './Catalog.module.css'
import CatalogCards from './CatalogCards/CatalogCards';

const Catalog = ({furniture}) => {
    return (
      <div className={style.catalogCardsList}>
       {furniture.map(item => 
          <CatalogCards
            key={item.objectId}
            description={item.description}
            name={item.name}
            pictureLink={item.pictureLink}
            pricePerOne={item.pricePerOne}
            />
       )}
            
      </div>
    )
};

export default Catalog;