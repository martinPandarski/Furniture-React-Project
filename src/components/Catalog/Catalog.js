import React, {Component} from 'react'

import CatalogCards from './CatalogCards/CatalogCards';
import * as furnitureService from '../../services/furnitureService';
import styles from './Catalog.module.scss';

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
      <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {this.state.furniture.length} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>
       {Object.keys(this.state.furniture).map(id => 
          <CatalogCards
            key={id}
            product={this.state.furniture[id]}
            />
       )}
       </div>
            <div className={styles.p__footer}>

            </div>
        </div>
    )
  }
    
};

export default Catalog;