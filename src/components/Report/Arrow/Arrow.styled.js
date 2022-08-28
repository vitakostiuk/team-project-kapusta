import styled from 'styled-components';

export const Arrow = styled.div``;

export const Image = styled.img`
  transform: rotate(${({ rotate }) => (rotate ? '180deg' : '0')});
`;
