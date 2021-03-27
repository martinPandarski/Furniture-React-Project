import {useEffect, useState} from 'react';
import * as furnitureService from '../../services/furnitureService';
import './Details.css'

function Details({
  match
}) {
    let [furniture, setFurniture] = useState({});

    useEffect(() => {
      console.log(match.params)
      furnitureService.getOne(match.params.id)
          .then(res => setFurniture(res))
    }, [])
  return (
    <div className="container">
                    <div className="card-image">
                        <img src={furniture.pictureLink} alt={furniture.name} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="card-right">
                        <h5 className="item-title">{furniture.name}</h5>  
                        <p className="item-price"><b>${furniture.pricePerOne}.00</b></p>
                        <p className="item-desc">{furniture.description}</p>
                        <button className="btn-add"><b>ADD TO CART</b></button>
                    </div>
                </div>
  );
}

export default Details;
