// import { useSelector } from 'react-redux';
// import authSelectors from '../../redux/feature/auth-selectors';
import PropTypes from 'prop-types';
import * as Styled from './MainPage.styled';
import Container from '../Container';

const MainPage = ({ children }) => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {/* з цим кодом дублюються сторінки */}
      {/* {isLoggedIn && (
        <Styled.MainAuth>
          <Styled.TopAuth></Styled.TopAuth>
          <Container>{children}</Container>
        </Styled.MainAuth>
      )} */}
      <Styled.MainSt>
        <Styled.Top></Styled.Top>
        <Container>{children}</Container>
      </Styled.MainSt>
    </>
  );
};

MainPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainPage;
