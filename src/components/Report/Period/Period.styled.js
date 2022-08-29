import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-bottom: 32px;

  @media screen and (min-width: 772px) {
    margin-bottom: 0px;
  }
`;

export const ChosenPeriod = styled.p``;

export const Period = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 5px;
  color: #52555f;
  opacity: 70%;
`;

export const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Date = styled.div`
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Month = styled.p`
  font-weight: 700;
  font-size: 14px;
`;

export const Year = styled.p`
  font-weight: 700;
  font-size: 14px;
`;
