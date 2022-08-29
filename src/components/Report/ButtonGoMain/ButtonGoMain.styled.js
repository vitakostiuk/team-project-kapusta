import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
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

export const Link = styled.a``;
