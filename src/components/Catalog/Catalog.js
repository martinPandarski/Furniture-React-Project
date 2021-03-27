import React, {Component} from 'react'
import style from './Catalog.module.css'
import CatalogCards from './CatalogCards/CatalogCards';
import * as furnitureService from '../../services/furnitureService';

class Catalog extends Component{
  constructor(props){
    super(props)
    this.state = {
      furniture: []
    }
  }
componentDidMount(){
  furnitureService.getAll()
  .then(furniture => {
    this.setState({furniture})
  }) 
}
  render(){
    return (
      <div className={style.catalogCardsList}>
       {this.state.furniture.map(item => 
          <CatalogCards
            key={item.objectId}
            itemId={item.objectId}
            introText={item.introText}
            name={item.name}
            pictureLink={item.pictureLink}
            pricePerOne={item.pricePerOne}
            />
       )}
            
      </div>
    )
  }
    
};

export default Catalog;