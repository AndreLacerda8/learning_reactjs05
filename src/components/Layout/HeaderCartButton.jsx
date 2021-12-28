import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'

import styles from './HeaderCartButton.module.css'

export function HeaderCartButton(props){
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button onClick={props.onClick} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {numberOfCartItems}
      </span>
    </button>
  )
}