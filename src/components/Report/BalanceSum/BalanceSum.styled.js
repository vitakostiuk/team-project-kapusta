import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 32px;

  @media screen and (min-width: 772px) {
    margin-bottom: 0px;
  }
`;

export const MoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 772px) {
    flex-direction: row;
  }
`;

export const Balance = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 8px;
  color: #52555f;
  opacity: 70%;

  @media screen and (min-width: 772px) {
    margin-right: 20px;
    margin-bottom: 0px;
  }
`;

export const Money = styled.p`
  font-weight: 700;
  font-size: 12px;
  width: 183px;
  padding: 15px 30px;
  border: 2px solid #ffffff;
  border-radius: 22px;
  background-color: #f5f6fb;

  @media screen and (min-width: 772px) {
    width: 125px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 16px;
  }
`;

export const Confirm = styled.button`
  font-weight: 700;
  font-size: 12px;
  width: 183px;
  padding: 15px 30px;
  border: 2px solid #ffffff;
  border-radius: 22px;
  background-color: #f5f6fb;

  @media screen and (min-width: 772px) {
    width: 125px;
  }

  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
