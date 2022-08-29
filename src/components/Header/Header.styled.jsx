import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleLink = styled(NavLink)`
  height: 33px;
  align-self: center;
  cursor: pointer;
`;

export const Img = styled.img`
  height: 33px;
  align-self: center;
  cursor: pointer;
`;

export const MenuUl = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  height: 58px;
  width: 100wh;
  padding: 0 20px;
  margin: 0;
  list-style: none;
`;

export const ExitBtn = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: block;
    text-decoration: underline;
    border: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.04em;
    color: var(--text-color-gray);
    background-color: transparent;
    cursor: pointer;
  }
`;

export const LogoutSvg = styled.img`
  display: flex;
  fill: #b5b5b6;
  cursor: pointer;
  margin: 20px;
  width: 20px;
  height: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;
