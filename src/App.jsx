import { useState } from 'react'
import { Cart } from './components/Cart/Cart'
import { Header } from './components/Layout/Header'
import { Meals } from './components/Meals/Meals'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)

  function showCartHandler(){
    setCartIsShow(true)
  }

  function hideCartHandler(){
    setCartIsShow(false)
  }

  return (
    <>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
