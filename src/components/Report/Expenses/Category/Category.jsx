import React from 'react';
// import PropTypes from 'prop-types';
import s from './Category.module.css';
import Icons from '../../../../images/report/sprite-icons.svg';

const Category = ({ details, categories, onSubmit }) => {
  const handleBtnClick = () => {
    const subs = details.sub;
    onSubmit(subs);
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
