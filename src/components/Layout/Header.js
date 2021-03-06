import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../asset/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onToggleCart={props.onToggleCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A tabble full of delicious food!' />
      </div>
    </React.Fragment>
  );
};

export default Header;
