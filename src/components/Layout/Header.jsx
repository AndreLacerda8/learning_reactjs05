import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.css'

export function Header(props){
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  )
}