import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;

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
  height: 85px;

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
  }
`;

export const IncrementWrapper = styled.div`
  /* flex-basis: 50%; */

  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* margin-right: 10px; */
  /* padding-top: 20px; */
  /* padding-bottom: 25px; */
`;

export const DecrementWrapper = styled.div`
  /* flex-basis: 50%; */

  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* margin-left: 10px; */
  /* padding-top: 20px; */
  /* padding-bottom: 25px; */
`;

export const Subtitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  /* color: #52555F; */
`;

export const Increment = styled.p`
  /* ${Subtitle} */
  color: green;
`;

export const Decrement = styled.p`
  color: red;
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
