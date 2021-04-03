
import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

import CartItem from '../CartItem/CartItem';
// import styles from './CartProducts.module.scss';

const CartProducts = () => {

    const { cartItems } = useContext(CartContext);
    console.log(cartItems)
    return ( 
        <div>
        <div className="card card-body border-0">

                {
                    cartItems.map(product =>  <CartItem key={product.objectId} product={product}/>)
                }

            </div>
        </div>

     );
}
 
export default CartProducts;