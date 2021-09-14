import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
function App() {
  const [IsCartDisplayed, setIsCartDisplayed] = useState(false);
  const toggleCartHandler = () => {
    setIsCartDisplayed((prevState) => (prevState = !prevState));
  };
  return (
    <React.Fragment>
      {IsCartDisplayed && <Cart onToggleCart={toggleCartHandler} />}
      <Header onToggleCart={toggleCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
