// import { useSelector } from 'react-redux';
import { StyleLink, MenuUl, Img } from './Header.styled';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <MenuUl>
      <StyleLink to="/" alt="homepage">
        <Img src={logo} alt="logo" />
      </StyleLink>
    </MenuUl>
  );
};

export default Header;
