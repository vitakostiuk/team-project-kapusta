import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  position: relative;
  margin-top: 16px;
  padding-top: 40px;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
`;

export const BigArrow = styled.img``;

export const SubText = styled.p`
  margin: 0;
  font-weight: ${({ weight = '400' }) => weight};
  font-size: 12px;
  color: rgba(82, 85, 95, 0.7);
  letter-spacing: 0.04em;
`;

export const PeriodWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 32px;
`;

export const ChosenPeriod = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #000;
`;

export const Balance = styled.p`
  padding: 15px 29px;
  border: 2px solid #fff;
  border-radius: 22px;
  background-color: #f5f6fb;
  margin: 8px auto 0;
  max-width: fit-content;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000;
`;
