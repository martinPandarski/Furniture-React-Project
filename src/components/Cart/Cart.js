import React,{useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext';
import './Cart.css'
import { useAuth } from '../../context/auth';
import api from '../../services/api'

export default function Cart({history}) {
    const [cart, setCart] = useContext(CartContext)
    const {currentUser} = useAuth()
    const [error, setIsError] = useState(false)

    function postOrder(){
      
      const payload={
          "name":currentUser.email,
          "orderCart":cart,
      }
      
        fetch(api.orders,{
          method: 'POST',
          // headers:{
          //     'Content-Type': 'application/json',
          // },
          body: JSON.stringify(payload)   
      })
      .then(res => history.push('/'))
      .catch(err => {
        console.log(err)
        setIsError(true)
          
      })
     
      
  }
    console.log(cart)
    return (
        <div>
        <main className="cart">
        {error ? "Something went wrong" : ''}
        {cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {cart.map(cartItem => (
            <li key={cartItem.itemId}>
              <div>
                <strong>{cartItem.name}</strong> - ${cartItem.price} 
              </div>
              <div>
                {/* <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.itemId
                  )}
                >
                  Remove from Cart
                </button> */}
              </div>
            </li>
          ))}
        </ul>
        <button onClick={postOrder}>Order the products {currentUser.email}</button>
      </main>
    </div>
    
    )
}
