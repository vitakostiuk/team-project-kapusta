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
