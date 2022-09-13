import { useSelector } from 'react-redux';
import authSelectors from '../../redux/feature/auth-selectors';
import { useState } from 'react';
import * as Styled from './Header.styled';
import Modal from 'components/common/Modal';
import logo from '../../images/logo.svg';
import logoutSvg from '../../images/logout.svg';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import ModalAvatar from '../common/modalChangeAvatar';
import { authSlice } from 'redux/feature';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const avatarUrl = useSelector(authSelectors.getUserAvatar);
  const [isShowModal, setIsShowModal] = useState(false);

  const [isShowAvatarModal, setShowAvatarModal] = useState(false);

  const hendelAvatarModal = () => {
    setShowAvatarModal(prevIsShowModal => !prevIsShowModal);
    console.log('avatarUrl', avatarUrl);
  };

  const handleClick = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  return (
    <>
      {!isLoggedIn && (
        <Styled.MenuUl>
          <Styled.StyleLink to="/" alt="homepage">
            <Styled.Img src={logo} alt="logo" />
          </Styled.StyleLink>
        </Styled.MenuUl>
      )}
      {isLoggedIn && (
        <Styled.MenuUl>
          <Styled.StyleLink to="/" alt="homepage">
            <Styled.Img src={logo} alt="logo" />
          </Styled.StyleLink>
          <Styled.UserDiv>
            <Styled.UserData>
              <Avatar
                sx={{ bgcolor: deepOrange[400] }}
                alt={userEmail}
                src={avatarUrl}
                onClick={hendelAvatarModal}
              ></Avatar>
              <Styled.UserEmail>{userEmail}</Styled.UserEmail>
            </Styled.UserData>
            <Styled.Span></Styled.Span>
            <Styled.LogoutSvg src={logoutSvg} onClick={handleClick} />
            <Styled.ExitBtn onClick={handleClick}>
              <Styled.Exit>Exit</Styled.Exit>
            </Styled.ExitBtn>
            {isShowModal && (
              <Modal
                onClick={handleClick}
                text="Do you really want to leave?"
                isShowModal={setIsShowModal}
              />
            )}
            {isShowAvatarModal && (
              <ModalAvatar
                onClick={hendelAvatarModal}
                text="You really want to upload a new avatar photo?"
                isShowModal={isShowAvatarModal}
              />
            )}
          </Styled.UserDiv>
        </Styled.MenuUl>
      )}
    </>
  );
};

export default Header;
