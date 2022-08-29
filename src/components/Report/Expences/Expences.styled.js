import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 772px) {
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;

  margin-left: 16px;
  margin-right: 16px;
`;

export const Categories = styled.ul``;

export const Category = styled.li``;
