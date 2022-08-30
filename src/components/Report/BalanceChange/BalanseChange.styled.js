import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const SumWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
  width: 280px;
  padding: 20px 10px 25px 10px;

  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 772px) {
    width: 704px;
    height: 50px;
    padding: 15px 10px 15px 10px;
  }

  @media screen and (min-width: 1280px) {
    width: 1034px;
  }

  ::after {
    position: absolute;
    content: ' ';
    margin-top: 7px;
    margin-bottom: 7px;
    right: 50%;
    left: 50%;
    height: 70px;
    border: 1px solid #e0e5eb;
    background-color: #e0e5eb;

    box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);

    font-size: 14px;
    font-weight: 700;

    @media screen and (min-width: 772px) {
      height: 36px;
    }
  }
`;

export const IncrementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;

  line-height: 16px;

  @media screen and (min-width: 772px) {
    margin-left: 20px;
    flex-direction: row;
    justify-content: left;
  }
`;

export const DecrementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;

  line-height: 16px;

  @media screen and (min-width: 772px) {
    margin-right: 20px;
    flex-direction: row;
    justify-content: right;
  }
`;

export const Subtitle = styled.p`
  @media screen and (min-width: 772px) {
    margin-right: 15px;
  }
`;

export const Increment = styled.p`
  color: #407946;
  letter-spacing: 0.04em;
`;

export const Decrement = styled.p`
  color: #e53935;
  letter-spacing: 0.04em;
`;
