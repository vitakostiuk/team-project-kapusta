import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import style from './SelectList.module.css';
import { useGetTransactionsQuery } from 'redux/report/transactionsApi';
import DropDown from './DropDown';
// import './SelectList.css';
import './SelectList.scss';

const SelectList = ({ onChangeCategory, onChangeId }) => {
  const [categoriesExpense, setCategoriesExpense] = useState([]);
  const [categoriesIncome, setCategoriesIncome] = useState([]);
  const [value, setValue] = useState('');
  const [id, setId] = useState('');
  const { data } = useGetTransactionsQuery();

  const type = useLocation().pathname;

  useEffect(() => {
    if (data) {
      const categories = data.data?.map(({ _id, title, type }) => ({
        id: _id,
        title,
        type,
      }));

      setCategoriesExpense(
        categories.filter(category => category.type === 'expenses'),
      );
      setCategoriesIncome(
        categories.filter(category => category.type === 'income'),
      );

      const findId = categories.find(category => category.title === value);
      if (findId) {
        setId(findId.id);
        onChangeId(findId.id);
      }
    }
  }, [data, onChangeId, value]);

  // const handleChangeCategory = e => {
  //   setValue(e.target.value);
  //   onChangeCategory(e.target.value);
  // };

  const handleChangeCategory = e => {
    // console.log(e);
    setValue(e.value);
    onChangeCategory(e.value);
  };

  const optionsExpense = categoriesExpense.map(({ title }) => ({
    value: `${title}`,
    label: `${title}`,
  }));

  const optionsIncome = categoriesIncome.map(({ title }) => ({
    value: `${title}`,
    label: `${title}`,
  }));

  return (
    <>
      {(type === '/expenses' || type === '/expenses/input') && (
        <Select
          classNamePrefix="custom-select"
          onChange={handleChangeCategory}
          required
          options={optionsExpense}
          placeholder="Product category"
          isSearchable={false}
        />
      )}

      {(type === '/income' || type === '/income/input') && (
        <Select
          classNamePrefix="custom-select"
          name="category"
          onChange={handleChangeCategory}
          required
          options={optionsIncome}
          placeholder="Product category"
          isSearchable={false}
        />
      )}
    </>
    // <select
    //   className={style.selectList}
    //   name="category"
    //   title="Select an item from the list"
    //   onChange={handleChangeCategory}
    //   required
    // >
    //   <option className={style.selectItem} value="Product category">
    //     Product category
    //   </option>
    //   {(type === '/expenses' || type === '/expenses/input') &&
    //     categoriesExpense.map(({ _id, title }) => (
    //       <option key={title} value={title} className={style.selectItem}>
    //         {title}
    //       </option>
    //     ))}
    //   {(type === '/income' || type === '/income/input') &&
    //     categoriesIncome.map(({ _id, title }) => (
    //       <option key={title} value={title} className={style.selectItem}>
    //         {title}
    //       </option>
    //     ))}
    // </select>
  );
};

export default SelectList;

// // WITH MATERIAL UI // //
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import style from './SelectList.module.css';
// import { useGetTransactionsQuery } from 'redux/report/transactionsApi';
// import Box from '@mui/material/Box';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';

// const SelectList = ({ onChangeCategory, onChangeId }) => {
//   const [categoriesExpense, setCategoriesExpense] = useState([]);
//   const [categoriesIncome, setCategoriesIncome] = useState([]);
//   const [value, setValue] = useState('');
//   const [id, setId] = useState('');
//   const { data } = useGetTransactionsQuery();

//   const type = useLocation().pathname;

//   useEffect(() => {
//     if (data) {
//       const categories = data.data?.map(({ _id, title, type }) => ({
//         id: _id,
//         title,
//         type,
//       }));

//       setCategoriesExpense(
//         categories.filter(category => category.type === 'expenses'),
//       );
//       setCategoriesIncome(
//         categories.filter(category => category.type === 'income'),
//       );
//       const findId = categories.find(category => category.title === value);
//       if (findId) {
//         setId(findId.id);
//         onChangeId(findId.id);
//       }
//     }
//   }, [data, id, onChangeId, value]);

//   const handleChangeCategory = e => {
//     setValue(e.target.value);
//     onChangeCategory(e.target.value);
//   };

//   return (
//     <FormControl>
//       {/* <InputLabel id="demo-simple-select-label" className={style.inputLabel}>
//           Product category
//         </InputLabel> */}
//       <InputLabel
//         variant="filled"
//         htmlFor="uncontrolled-native"
//         className={style.inputLabel}
//       >
//         Product category
//       </InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         className={style.selectList}
//         sx={{
//           '& .MuiInputBase-root, .MuiOutlinedInput-root, MuiSelect-root': {
//             outline: 'none',
//             border: '2px solid #f6f7fc',
//           },
//         }}
//         name="category"
//         value={value}
//         title="Select an item from the list"
//         onChange={handleChangeCategory}
//         displayEmpty={false}
//         required
//       >
//         {(type === '/expenses' || type === '/expenses/input') &&
//           categoriesExpense.map(({ _id, title }) => (
//             <MenuItem key={title} value={title} className={style.selectItem}>
//               {title}
//             </MenuItem>
//           ))}
//         {(type === '/income' || type === '/income/input') &&
//           categoriesIncome.map(({ _id, title }) => (
//             <MenuItem key={title} value={title} className={style.selectItem}>
//               {title}
//             </MenuItem>
//           ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default SelectList;
// <DropDown
// value={value}
// handleChange={handleChangeCategory}
// items={[
//   { key: 'Last 7 Days', value: 7 },
//   { key: 'Last 28 Days', value: 28 },
//   { key: 'Last 90 Days', value: 90 },
// ]}
// />
