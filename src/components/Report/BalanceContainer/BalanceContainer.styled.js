import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  @media screen and (min-width: 772px) {
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 32px;
  }
`;

export const Balance = styled.div`
  @media screen and (min-width: 772px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
`;
