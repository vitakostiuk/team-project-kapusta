// import { useSelector } from 'react-redux';
// import authSelectors from '../../Redux/auth/auth-selectors';
import PropTypes from 'prop-types';
import { MainSt } from './MainPage.styled';
import Container from '../Container/Container';

const MainPage = ({ children }) => {
  return (
    <MainSt>
      <Container>{children}</Container>
    </MainSt>
  );
};

MainPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainPage;
