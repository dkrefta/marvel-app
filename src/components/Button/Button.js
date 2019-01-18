import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '@rebass/grid';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import buttonStyle from './buttonStyle';

const Wrapper = styled(Link)`
  ${buttonStyle};
  &:focus {
    outline: 0;
  }
`;

const Button = ({ to, children, icon, isLoading, ...rest }) => {
  let leftIcon;

  if (icon) {
    if (isLoading) {
      leftIcon = <Icon width="16" height="16" icon="spinner2" fill="currentColor" spin />;
    } else {
      leftIcon = <Icon width="16" height="16" icon={icon} fill="currentColor" />;
    }
  }

  return (
    <Wrapper to={to} {...rest}>
      {leftIcon}
      <Box ml={leftIcon ? 2 : 0}>{children}</Box>
    </Wrapper>
  );
};

Button.defaultProps = {
  appearance: 'primary',
  size: 'default'
};

Button.propTypes = {
  appearance: PropTypes.oneOf([
    'primary',
    'info',
    'danger',
    'ghost',
    'ghostSuccess',
    'textSuccess'
  ]),
  size: PropTypes.oneOf(['xs', 'default', 'lg'])
};

export default Button;
