import { CartContext } from './cart-context'

export function CartProvider(props){
  function addItemToCartHandler(item){

  }

  function removeItemFromCartHandler(item){
    
  }
  
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}