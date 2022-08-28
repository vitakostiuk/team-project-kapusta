import styled from 'styled-components';

export const Arrow = styled.button`
  vertical-align: center;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
`;

export const Image = styled.img`
  transform: rotate(${({ rotate }) => (rotate ? '180deg' : '0')});
  width: 6px;
  align-self: center;
  display: block;
`;
