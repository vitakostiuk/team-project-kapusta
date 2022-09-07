import styled from 'styled-components';
import down from '../../images/mainImg/down.png';
import rightTop from '../../images/mainImg/rightTop.svg';
import group from '../../images/kapusta_background.png';
import two from '../../images/mainImg/two.svg';

export const MainSt = styled.div`
  width: 320px;
  margin: 0 auto;
  min-height: 820px;
  background: url(${rightTop}) top 104px right -35px no-repeat,
    url(${down}) bottom 5px left 35px no-repeat;
  position: relative;
  padding-bottom: 160px;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
    padding-left: 26px;
    padding-right: 26px;
    min-height: 1024px;
    background: url(${group}) top 30px left 5px no-repeat,
      url(${two}) bottom 90px left 103px no-repeat;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
    padding-left: 26px;
    padding-right: 26px;
    min-height: 1024px;
    background: url(${group}) top 30px left 5px no-repeat,
      url(${two}) bottom 90px left 260px no-repeat;
  }
`;

export const MainAuth = styled.div`
  width: 320px;
  margin: 0 auto;
  background-size: 83px;
  position: relative;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    min-height: 1024px;
    width: 768px;
    margin: 0 auto;
    background: url(${down}) top 104px right -35px no-repeat,
      url(${two}) bottom 100px right 90px no-repeat;
    background-size: 83px, 160px;
    position: relative;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
    padding-left: 26px;
    padding-right: 26px;
    min-height: 850px;
    background: url(${group}) bottom 0px left no-repeat;
  }
`;

export const TopAuth = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 320px;
  margin: 0 auto;
  padding-left: 26px;
  padding-right: 26px;
  height: 313px;
  border-bottom-left-radius: 100px;

  background-size: 83px;
  background-color: #f5f6fb;

  @media screen and (min-width: 768px) {
    height: 530px;
    width: 768px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1280px) {
    height: 580px;
    width: 1280px;
    margin: 0 auto;
    padding-left: 26px;
    padding-right: 26px;
  }
`;

export const Top = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 320px;
  height: 313px;
  border-bottom-left-radius: 100px;
  background: #f5f6fb;

  @media screen and (min-width: 768px) {
    background-color: #f5f6fb;
    width: 768px;
    margin: 0 auto;
    height: 530px;
    box-shadow: none;
  }

  @media screen and (min-width: 1280px) {
    background-color: #f5f6fb;
    width: 1280px;
    margin: 0 auto;
    height: 580px;
    box-shadow: none;
  }
`;
