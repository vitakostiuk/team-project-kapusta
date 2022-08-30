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
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
`;

export const Categories = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Category = styled.li`
  width: 100px;
`;

export const Sum = styled.p`
  margin-bottom: 5px;
`;

export const NameOfCategory = styled.p``;

export const Picture = styled.img`
  margin-bottom: 5px;
`;
