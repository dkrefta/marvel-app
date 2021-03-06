/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// svgs
import icons from '../../fonts/icomoon.svg';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.span`
  animation: ${spin} 0.3s linear infinite;
`;

const Icon = ({ icon, ...rest }) => (
  <svg data-testid="svg-icon" {...rest}>
    <use xlinkHref={`${icons}#icon-${icon}`} />
  </svg>
);

const SpinIcon = styled(Icon)`
  display: block;
  margin: 0 auto;
`;

const Component = ({ spin, ...rest }) => {
  if (spin) {
    return (
      <Rotate>
        <SpinIcon {...rest} />
      </Rotate>
    );
  }

  return <Icon {...rest} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Component;
