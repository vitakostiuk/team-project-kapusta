import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px auto 0;
  overflow-x: auto;
  padding-bottom: 30px;
  background-color: #fff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  width: 100%;

  & > div {
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    box-shadow: none;
    border-radius: 0;
    border-top: 1px solid #e0e5eb;
  }

  .recharts-layer.recharts-bar-rectangle {
    color: #ffdac0;

    &:nth-child(3n + 1) {
      color: #ff751d;
    }
  }
`;

export const BgContainer = styled.div`
  width: 90%;
  background: repeating-linear-gradient(
    #f5f6fb 30px,
    #f5f6fb 32px,
    transparent 32px,
    transparent 70px
  );
  margin: 0 auto;

  & > div {
    margin: 0 auto;
  }
`;
