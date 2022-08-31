import { useSelector } from 'react-redux';
import authSelectors from '../../redux/feature/auth-selectors';
import { useState } from 'react';
import * as Styled from './Header.styled';
import Modal from 'components/common/Modal';
import logo from '../../images/logo.svg';
import logoutSvg from '../../images/logout.svg';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userEmail = useSelector(authSelectors.getUserEmail);

  const [isShowModal, setIsShowModal] = useState(false);

  const handleClick = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  return (
    <Styled.MenuUl>
      <Styled.StyleLink to="/" alt="homepage">
        <Styled.Img src={logo} alt="logo" />
      </Styled.StyleLink>
      {isLoggedIn && (
        <Styled.UserDiv>
          <Styled.UserData>
            <Avatar
              sx={{ bgcolor: deepOrange[400] }}
              alt={userEmail}
              src="/broken-image.jpg"
            ></Avatar>
            <Styled.UserEmail>{userEmail}</Styled.UserEmail>
          </Styled.UserData>
          <Styled.Span></Styled.Span>
          <Styled.LogoutSvg src={logoutSvg} />
          <Styled.ExitBtn onClick={handleClick}>Exit</Styled.ExitBtn>
          {isShowModal && (
            <Modal
              onClick={handleClick}
              text="Do you really want to leave?"
              isShowModal={setIsShowModal}
            />
          )}
        </Styled.UserDiv>
      )}
    </Styled.MenuUl>
  );
};

export default Header;
