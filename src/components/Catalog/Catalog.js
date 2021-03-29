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
       {Object.keys(this.state.furniture).map(id => 
          <CatalogCards
            key={id}
            itemId={id}
            introText={this.state.furniture[id].introText}
            name={this.state.furniture[id].name}
            pictureLink={this.state.furniture[id].pictureLink}
            pricePerOne={this.state.furniture[id].pricePerOne}
            />
       )}
            
      </div>
    )
  }
    
};

export default Catalog;