import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import s from './Category.module.css';
import Icons from '../../../../images/report/sprite-icons.svg';

import { setCategories } from 'redux/report/reportSlice';

const Category = ({ details, categories }) => {
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    const subs = details.sub;
    dispatch(setCategories(subs));
  };

  return (
    <li className={s.category}>
      <p className={s.sum}>{details.sum}</p>
      <button className={s.btn} onClick={handleBtnClick}>
        <svg className={s.picture}>
          <use xlinkHref={`${Icons}#icon-${categories}`} />
        </svg>
      </button>
      <p className={s.nameOfCategory}>{categories}</p>
    </li>
  );
};

// Category.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default Category;
