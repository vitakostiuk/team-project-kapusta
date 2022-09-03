import styled from 'styled-components';

export const Image = styled.img`
  transform: rotate(${({ rotate }) => (rotate ? '180deg' : '0')});
  width: 6px;
  align-self: center;
  display: block;
`;
