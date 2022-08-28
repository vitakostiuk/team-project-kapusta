import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  position: relative;

  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 32px;
`;

export const MoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Balance = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 8px;
  color: #52555f;
  opacity: 70%;
`;

export const Money = styled.p`
  font-weight: 700;
  font-size: 12px;
  width: 183px;
  padding: 15px 30px;
  border: 2px solid #ffffff;
  border-radius: 22px;
  background-color: #f5f6fb;
`;
