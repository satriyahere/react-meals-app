import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../asset/meals.jpg';

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A tabble full of delicious food!' />
      </div>
    </React.Fragment>
  );
};

export default Header;
