import React from 'react';
import s from './Category.module.css';
import Icons from '../../../../images/report/sprite-icons.svg';

const Category = ({
  details,
  categories,
  onChange,
  active,
  nameOfCategory,
}) => {
  const handleBtnClick = () => {
    onChange(categories);
  };

  return (
    <li className={s.category}>
      <p className={s.sum}>{details}</p>

      <button
        className={active ? s.btn_active : s.btn}
        onClick={handleBtnClick}
      >
        <svg className={s.picture}>
          <use xlinkHref={`${Icons}#icon-${nameOfCategory}`} />
        </svg>
      </button>

      <p className={s.nameOfCategory}>{nameOfCategory}</p>
    </li>
  );
};

export default Category;
