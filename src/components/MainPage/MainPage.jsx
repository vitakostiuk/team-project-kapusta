// import { useSelector } from 'react-redux';
// import authSelectors from '../../Redux/auth/auth-selectors';
import PropTypes from 'prop-types';
import { MainSt, TopAuth } from './MainPage.styled';
import Container from '../Container';

const MainPage = ({ children }) => {
  return (
    <MainSt>
      <TopAuth></TopAuth>
      <Container>{children}</Container>
    </MainSt>
  );
};

MainPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainPage;
