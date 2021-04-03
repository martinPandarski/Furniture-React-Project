import React, {useEffect, useState, useContext} from 'react';
import * as furnitureService from '../../services/furnitureService';
import './Details.css'
import {useAuth} from '../../context/auth'

function Details({
  match
}) {
    let [furniture, setFurniture] = useState({});
    const { currentUser } = useAuth()
    useEffect(() => {
      console.log(match.params.id)
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
                        <p className="item-price"><b>${furniture.pricePerOne}</b></p>
                        <p className="item-desc">{furniture.description}</p>
                    </div>
                </div>
  );
}


export default Details;
