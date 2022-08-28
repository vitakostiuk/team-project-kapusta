import styled from 'styled-components';

export const Div = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  max-width: 320px;
  border: 1px solid green;

  @media screen and (min-width: 768px) {
    padding-left: 51px;
    padding-right: 52px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
    padding-right: 110px;
    max-width: 1280px;
  }
`;
