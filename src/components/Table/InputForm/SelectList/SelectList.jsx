import style from './SelectList.module.css';

const SelectList = () => {
  return (
    <select
      className={style.selectList}
      name="category"
      title="Select an item from the list"
      required
    >
      <option className={style.selectItem} value="">
        Product category
      </option>
      <option className={style.selectItem} value="1">
        1
      </option>
      <option className={style.selectItem} value="2">
        2
      </option>
      <option className={style.selectItem} value="3">
        3
      </option>
      <option className={style.selectItem} value="4">
        4
      </option>
      <option className={style.selectItem} value="5">
        5
      </option>
      <option className={style.selectItem} value="6">
        6
      </option>
    </select>
  );
};

export default SelectList;
