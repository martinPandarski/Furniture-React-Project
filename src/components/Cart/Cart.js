import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import './Cart.css'

export default function Cart() {
    const [cart, setCart] = useContext(CartContext)
    console.log(cart)
    return (
        <div>
        <main className="cart">
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
      </main>
    </div>
    
    )
}
