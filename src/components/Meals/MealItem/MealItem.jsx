import { useContext } from 'react'
import { CartContext } from '../../../store/cart-context'
import { MealItemForm } from './MealItemForm'

import styles from './MealItem.module.css'

export function MealItem(props){
  const cartCtx = useContext(CartContext)
  const price = `R$${props.price.toFixed(2).replace('.', ',')}`

  function addToCartHandler(amount){
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  )
}