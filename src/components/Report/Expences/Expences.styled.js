import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  @media screen and (min-width: 772px) {
    padding: 20px 40px 20px 40px;

    background-color: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  margin-left: 15px;
  margin-right: 15px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
`;

export const Categories = styled.ul`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  margin-left: -20px;
  margin-right: -20px;
  /* border-bottom: 1px solid #E0E5EB; */

  @media screen and (min-width: 772px) {
    margin-left: -40px;
    margin-right: -40px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`;

export const Category = styled.li`
  /* display: flex;
flex-direction: column;
align-items: stretch; */
  flex-basis: calc((280px - 6 * 5px) / 3);
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media screen and (min-width: 772px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  /* ::after {
    width: 280px;
    height: 4px;
    background-color: #E0E5EB;
  } */
`;

export const Sum = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;

  margin-bottom: 5px;
`;

export const NameOfCategory = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
`;

export const Picture = styled.img`
  /* width: calc(280px * 33%); */
  height: 56px;
  margin-bottom: 5px;
`;
