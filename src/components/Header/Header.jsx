// import { useSelector } from 'react-redux';
import { useState } from 'react';
import * as Styled from './Header.styled';
import Modal from 'components/common/Modal';
import logo from '../../images/logo.svg';
import logoutSvg from '../../images/logout.svg';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  return (
    <Styled.MenuUl>
      <Styled.StyleLink to="/" alt="homepage">
        <Styled.Img src={logo} alt="logo" />
      </Styled.StyleLink>
      <Styled.UserDiv>
        <Styled.UserData>
          <Avatar
            sx={{ bgcolor: deepOrange[400] }}
            // alt={}
            // src="../../images/mainImg/defaultUserPhoto.jpg"
          >
            Y
          </Avatar>
          <Styled.UserEmail>UserEmail</Styled.UserEmail>
        </Styled.UserData>
        <Styled.Span></Styled.Span>
        <Styled.LogoutSvg src={logoutSvg} onClick={toggleModal} />
        <Styled.ExitBtn onClick={toggleModal}>Exit</Styled.ExitBtn>
        {isShowModal && (
          <Modal onClick={toggleModal} text="Do you really want to leave?" />
        )}
      </Styled.UserDiv>
    </Styled.MenuUl>
  );
};

export default Header;
