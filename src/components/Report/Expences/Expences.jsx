import React from 'react';
import s from './Expences.module.css';
import Arrow from '../Arrow';
import products from '../../../images/products.svg';
import hobbies from '../../../images/sports-hobbies.svg';
import entertainment from '../../../images/entertainment.svg';
import health from '../../../images/hands-holding-heart.svg';
import alcohol from '../../../images/cocktail.svg';
import communal from '../../../images/communal.svg';
import transport from '../../../images/car.svg';
import education from '../../../images/book.svg';
import technique from '../../../images/tools.svg';
import housing from '../../../images/housing.svg';
import other from '../../../images/other.svg';

const Expences = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <Arrow />
        <p className={s.text}>EXPENSES</p>
        <Arrow rotate="true" />
      </div>

      <ul className={s.categories}>
        <li className={s.category}>
          <p className={s.sum}>3 000.00</p>
          <img className={s.picture} src={products} alt="products" />
          <p className={s.nameOfCategory}>PRODUCTS</p>
        </li>
        <li className={s.category}>
          <p className={s.sum}>5 000.00</p>
          <img className={s.picture} src={alcohol} alt="alcohol" />
          <p className={s.nameOfCategory}>ALCOHOL</p>
        </li>
        <li className={s.category}>
          <p className={s.sum}>3 000.00</p>
          <img className={s.picture} src={entertainment} alt="entertainment" />
          <p className={s.nameOfCategory}>ENTERTAINMENT</p>
        </li>
        <li className={s.category}>
          <p className={s.sum}>3 000.00</p>
          <img className={s.picture} src={health} alt="health" />
          <p className={s.nameOfCategory}>PRODUCTS</p>
        </li>
        <li className={s.category}>
          <p className={s.sum}>3 000.00</p>
          <img className={s.picture} src={transport} alt="transport" />
          <p className={s.nameOfCategory}>PRODUCTS</p>
        </li>
        <li className={s.category}>
          <p className={s.sum}>3 000.00</p>
          <img className={s.picture} src={housing} alt="housing" />
          <p className={s.nameOfCategory}>PRODUCTS</p>
        </li>
        <li className={s.category}>
          <p className={s.sum}>3 000.00</p>
          <img className={s.picture} src={technique} alt="technique" />
          <p className={s.nameOfCategory}>PRODUCTS</p>
        </li>
        <li className={s.category}>
          <p className={s.sum}>3 000.00</p>
          <img className={s.picture} src={communal} alt="communal" />
          <p className={s.nameOfCategory}>PRODUCTS</p>
        </li>
        <li className={s.category}>
          <p className={s.sum}>3 000.00</p>
          <img className={s.picture} src={hobbies} alt="hobbies" />
          <p className={s.nameOfCategory}>PRODUCTS</p>
        </li>
        <li className={s.category}>
          <p className={s.sum}>3 000.00</p>
          <img className={s.picture} src={education} alt="education" />
          <p className={s.nameOfCategory}>PRODUCTS</p>
        </li>
        <li className={s.category}>
          <p className={s.sum}>3 000.00</p>
          <img className={s.picture} src={other} alt="other" />
          <p className={s.nameOfCategory}>PRODUCTS</p>
        </li>
      </ul>
    </div>
  );
};

export default Expences;
