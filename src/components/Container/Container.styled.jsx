import styled from 'styled-components';

export const Div = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-width: 320px;
  /* border: 1px solid green; */

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 123px;
    padding-right: 123px;
    max-width: 1280px;
  }
`;
