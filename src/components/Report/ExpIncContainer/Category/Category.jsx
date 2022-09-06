import React from 'react';
import s from './Category.module.css';
import Icons from '../../../../images/report/sprite-icons.svg';

const Category = ({ details, categories, onChange, active }) => {
  const handleBtnClick = () => {
    onChange(categories);
  };

  // console.log(categories)

  return (
    <li className={s.category}>
      <p className={s.sum}>{details}</p>

      <button
        className={active ? s.btn_active : s.btn}
        onClick={handleBtnClick}
      >
        <svg className={s.picture}>
          <use xlinkHref={`${Icons}#icon-${categories}`} />
        </svg>
      </button>

      <p className={s.nameOfCategory}>{categories}</p>
    </li>
  );
};

export default Category;
