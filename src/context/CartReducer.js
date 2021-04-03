const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.pricePerOne * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
           
            if (!state.cartItems.find(item => item.objectId === action.payload.objectId)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
                

                
            } 

            return {
                ...state,   
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "REMOVE_ITEM":

            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item.objectId !== action.payload.objectId)),
                cartItems: [...state.cartItems.filter(item => item.objectId !== action.payload.objectId)]
            }
        case "INCREASE":
            const updatedCart = [...state.cartItems];
            const updatedItemIndex = updatedCart.findIndex(item=> item.objectId === action.payload.objectId)
            const updatedItem = {
                ...updatedCart[updatedItemIndex]
            };
            updatedItem.quantity++;
            updatedCart[updatedItemIndex] = updatedItem;

        //    state.cartItems[state.cartItems.findIndex(item => item.objectId === action.payload.objectId)].quantity++
        
            // console.log(state.cartItems[state.cartItems.findIndex(item => item.objectId === action.payload.objectId)].quantity)
            return {
                ...state,
                ...sumItems(updatedCart),
                cartItems: updatedCart
            
            }
        case "DECREASE":
            const updatedDecreaseCart = [...state.cartItems];
            const updatedDecreaseItemIndex = updatedDecreaseCart.findIndex(item=> item.objectId === action.payload.objectId)
            const updatedDecreaseItem = {
                ...updatedDecreaseCart[updatedDecreaseItemIndex]
            };
            updatedDecreaseItem.quantity--;
            updatedDecreaseCart[updatedDecreaseItemIndex] = updatedDecreaseItem
            // state.cartItems[state.cartItems.findIndex(item => item.objectId === action.payload.objectId)].quantity--
            return {
                ...state,
                ...sumItems(updatedDecreaseCart),
                cartItems: updatedDecreaseCart
            }
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
            }
        case "CLEAR":
                return {
                    cartItems: [],
                    ...sumItems([]),
                }
        default:
            return state

    }
}