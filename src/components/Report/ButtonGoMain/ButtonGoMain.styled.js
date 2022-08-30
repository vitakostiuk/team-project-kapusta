import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 772px) {
    margin-right: 155px;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 250px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Text = styled.a`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  margin-left: 15px;

  @media screen and (max-width: 771px) {
    display: none;
  }
`;

export const BigArrow = styled.img``;

export const Link = styled.p`
  width: 100px;
`;
