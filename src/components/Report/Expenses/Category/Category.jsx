import React from 'react';
import PropTypes from 'prop-types';
import s from './Category.module.css';
import Icons from '../../../../images/report/sprite-icons.svg';

const Category = ({ name }) => {
  const handleBtnClick = () => {};

  return (
    <li className={s.category}>
      <p className={s.sum}>3 000.00</p>
      <button className={s.btn} onClick={handleBtnClick}>
        <svg className={s.picture}>
          <use xlinkHref={`${Icons}#icon-${name}`} />
        </svg>
      </button>
      <p className={s.nameOfCategory}>{name}</p>
    </li>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
