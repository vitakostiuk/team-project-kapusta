import React from 'react';

import { makeStyles } from '@mui/styles';

// import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const useStyles = makeStyles(() => ({
  formControl: {
    '& .MuiInputBase-root': {
      // color: '#6EC177',
      borderColor: '#f6f7fc',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '0',
      minWidth: '169px',
      height: '44px',
      justifyContent: 'center',
    },
    '&.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root':
      {
        outlineColor: '#f92525',
      },
    '& .MuiSelect-select.MuiSelect-select': {
      paddingRight: '0px',
      outline: 'none',
    },
  },

  // <div class="MuiInputBase-root
  // MuiOutlinedInput-root
  // MuiInputBase-colorPrimary
  // MuiInputBase-formControl
  // css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root
  // "><div tabindex="0" role="button" aria-expanded="false" aria-haspopup="listbox" class="MuiSelect-select makeStyles-select-182 MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input"><span class="notranslate">​</span></div><input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput" value=""><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon makeStyles-selectIcon-183 MuiSelect-iconOutlined css-hfutr2-MuiSvgIcon-root-MuiSelect-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="M7 10l5 5 5-5z"></path></svg><fieldset aria-hidden="true" class="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline"><legend class="css-hdw1oc"><span class="notranslate">​</span></legend></fieldset></div>

  select: {
    // width: 'auto',
    fontSize: '12px',
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  selectIcon: {
    position: 'relative',
    color: '#6EC177',
    fontSize: '14px',
  },
  paper: {
    borderRadius: 12,
    marginTop: 8,
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    '& li': {
      fontWeight: 200,
      paddingTop: 8,
      paddingBottom: 8,
      fontSize: '12px',
    },
    '& li.Mui-selected': {
      color: 'white',
      background: '#6EC177',
    },
    '& li.Mui-selected:hover': {
      background: '#6EC177',
    },
  },
}));

const DropDown = ({ value, handleChange, items }) => {
  const classes = useStyles();

  const menuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={value}
        onChange={handleChange}
        disableUnderline
        // IconComponent={ExpandMoreRoundedIcon}
        MenuProps={menuProps}
        classes={{
          select: classes.select,
          icon: classes.selectIcon,
        }}
      >
        {items.map(item => (
          <MenuItem key={item.key} value={item.value}>
            {item.key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
