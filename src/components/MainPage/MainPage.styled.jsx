import styled from 'styled-components';
import down from '../../images/mainImg/down.png';
import rightTop from '../../images/mainImg/rightTop.svg';
import group from '../../images/kapusta_background.png';
import two from '../../images/mainImg/two.svg';

export const MainSt = styled.div`
  width: 100%;
  min-height: 820px;
  background: url(${rightTop}) top 104px right -35px no-repeat,
    url(${down}) bottom 5px left 35px no-repeat;
  position: relative;
  padding-bottom: 160px;

  @media screen and (min-width: 768px) {
    min-height: 1024px;
    background: url(${group}) top 30px left 5px repeat-x,
      url(${two}) bottom 300px left 353px no-repeat;
  }
`;

export const MainAuth = styled.div`
  width: 100%;
  background-size: 83px;
  position: relative;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    min-height: 1024px;
    width: 100%;
    background: url(${down}) top 104px right -35px no-repeat,
      url(${two}) bottom 100px right 90px no-repeat;
    background-size: 83px, 160px;
    position: relative;
  }

  @media screen and (min-width: 1280px) {
    min-height: 850px;
    background: url(${group}) bottom 0px left repeat-x;
  }
`;

export const TopAuth = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 313px;
  border-bottom-left-radius: 100px;

  background-size: 83px;
  background-color: #f5f6fb;

  @media screen and (min-width: 768px) {
    height: 530px;
  }
  @media screen and (min-width: 1280px) {
    height: 580px;
  }
`;

export const Top = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 313px;
  border-bottom-left-radius: 100px;
  background: #f5f6fb;

  @media screen and (min-width: 768px) {
    background-color: #f5f6fb;
    height: 530px;
    box-shadow: none;
  }
`;
