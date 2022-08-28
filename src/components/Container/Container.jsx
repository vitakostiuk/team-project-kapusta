import React from 'react';
import PropTypes from 'prop-types';
import { Div } from './Container.styled';

function Container({ children }) {
  return <Div>{children}</Div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
