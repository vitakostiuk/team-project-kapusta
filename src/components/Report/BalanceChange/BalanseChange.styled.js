import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  margin: 32px auto 0;
  background: #fff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
  padding: 7px 0 7.5px;
  min-height: 85px;
  align-items: stretch;

  font-size: 14px;
  font-weight: 700;

  & p {
    margin: 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const IncrementWrapper = styled.div`
  flex-basis: 50%;
  border-left: 1px solid #e0e5eb;
`;

export const DecrementWrapper = styled.div`
  flex-basis: 50%;
`;

export const Subtitle = styled.p`
  color: #52555f;
`;

export const Increment = styled.p`
  color: #407946;
  letter-spacing: 0.04em;
`;

export const Decrement = styled.p`
  color: #e53935;
  letter-spacing: 0.04em;
`;
