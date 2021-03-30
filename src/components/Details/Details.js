import React, {useEffect, useState, useContext} from 'react';
import * as furnitureService from '../../services/furnitureService';
import './Details.css'
import {useAuth} from '../../context/auth'
import {CartContext} from '../../context/CartContext'
function Details({
  match
}) {
    let [furniture, setFurniture] = useState({});
    const { currentUser } = useAuth()
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
      const product = {name : furniture.name, price : furniture.pricePerOne, itemId : match.params.id};
      setCart(currentCart => [...currentCart, product]);
  
    }

    useEffect(() => {
      furnitureService.getOne(match.params.id)
          .then(res => setFurniture(res))
    }, [])
    console.log(furniture)
  return (
    <div className="container">
                    <div className="card-image">
                        <img src={furniture.pictureLink} alt={furniture.name} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="card-right">
                        <h5 className="item-title">{furniture.name}</h5>  
                        <p className="item-price"><b>${furniture.pricePerOne}</b></p>
                        <p className="item-desc">{furniture.description}</p>
                        {currentUser ? <button onClick={addToCart} className="btn-add"><b>ADD TO CART</b></button> : ''}
                    </div>
                </div>
  );
}


export default Details;
