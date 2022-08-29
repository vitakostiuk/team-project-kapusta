import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const SumWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;

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

  /* margin: 32px auto 0;
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
  } */

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

      @media screen and (min-width: 772px) {
        height: 36px;
      }
    }
  }
`;

export const IncrementWrapper = styled.div`
  flex-basis: 50%;
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

  /* padding-top: 20px; */
  /* padding-bottom: 25px; */
  /* flex-basis: 50%; */
`;

export const DecrementWrapper = styled.div`
  flex-basis: 50%;

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
  /* margin-right: 10px;
  margin-left: 10px; */
  /* padding-top: 20px; */
  /* padding-bottom: 25px; */
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

// @media screen and (min-width: 320px) {
//   .container {
//       width: 320px;
//   }
// }

// @media screen and (min-width: 772px) {
//   .container {
//       width: 772px;
//   }
// }

// @media screen and (min-width: 1280px) {
//   .container {
//       width: 1280px;
//   }
// }

// export const Subtitle = styled.p`
//   color: #52555f;
// `;

// export const Increment = styled.p`
//   color: #407946;
//   letter-spacing: 0.04em;
// `;

// export const Decrement = styled.p`
//   color: #e53935;
//   letter-spacing: 0.04em;
// `;
