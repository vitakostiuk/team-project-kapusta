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
  // width: 320px;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  list-style: none;

  @media screen and (min-width: 768px) {
    // width: 768px;
    margin: 0 auto;
    padding-left: 26px;
    padding-right: 26px;
  }

  @media screen and (min-width: 1280px) {
    // width: 1280px;
    margin: 0 auto;
    padding-left: 26px;
    padding-right: 26px;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  height: 36px;
`;

export const UserData = styled.div`
  align-items: center;
  display: flex;
  margin-top: 22px;
`;

export const UserEmail = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 14px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: #52555f;
    border: none;
    background-color: transparent;
    display: flex;
    margin-left: 16px;
  }
`;

export const Span = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    height: 36px;
    border-right: 1px solid #e0e5eb;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    display: flex;
  }
`;

export const LogoutSvg = styled.img`
  display: flex;
  fill: #b5b5b6;
  cursor: pointer;
  margin: 20px;
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
