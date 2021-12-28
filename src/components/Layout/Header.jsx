import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.css'
import { HeaderCartButton } from './HeaderCartButton'

export function Header(props){
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  )
}