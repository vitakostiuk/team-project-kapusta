import styled from 'styled-components';

export const MainSt = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 60px);
  background: url(../../images/background_img.png) no-repeat;
  background-size: cover;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: calc(100vh - 60px);
    background: url(../../images/background_img.png) no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`;
