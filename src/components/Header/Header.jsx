// import { useSelector } from 'react-redux';
import { useState } from 'react';
import { StyleLink, MenuUl, Img, ExitBtn, LogoutSvg } from './Header.styled';
import Modal from 'components/common/Modal';
import logo from '../../images/logo.svg';
import logoutSvg from '../../images/logout.svg';

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  return (
    <MenuUl>
      <StyleLink to="/" alt="homepage">
        <Img src={logo} alt="logo" />
      </StyleLink>
      <LogoutSvg src={logoutSvg} onClick={toggleModal} />
      <ExitBtn onClick={toggleModal}>Exit</ExitBtn>
      {isShowModal && (
        <Modal onClick={toggleModal} text="Do you really want to leave?" />
      )}
    </MenuUl>
  );
};

export default Header;
