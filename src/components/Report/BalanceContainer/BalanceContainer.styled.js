import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 772px) {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin-bottom: 32px;
  }
`;

export const Balance = styled.div`
  margin-top: 22px;

  @media screen and (min-width: 772px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;
