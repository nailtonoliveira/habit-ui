import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const outlined = (theme, color) => css`
  color: ${theme.palette[color].main};
  background-color: transparent;
  border: 1px solid ${theme.palette[color].main};
  padding: 9px 15px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: none;
  }
`;

const contained = (theme, color) => css`
  color: ${theme.palette[color].contrast};
  background-color: ${theme.palette[color].main};

  &:hover {
    background-color: ${theme.palette[color].dark};
    box-shadow: 0px 1px 6px 3px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  transition: background-color 0.25s, color 0.25s;
  border-radius: 30px;

  /* default style */
  font-size: 1.4rem;
  line-height: 100%;

  color: ${({ theme, color }) =>
    color !== 'primary'
      ? theme.palette[color].contrast
      : theme.palette.primary.main};
  background-color: transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  ${({ variant, color, theme }) => {
    switch (variant) {
      case 'outlined':
        return outlined(theme, color);
      case 'contained':
        return contained(theme, color);
    }
  }}
`;

const IconSpace = styled.span`
  margin-right: 0.8rem;
`;

export default function Button({
  startIcon: StartIcon,
  size,
  children,
  ...props
}) {
  return (
    <ButtonStyle size={size} {...props}>
      {StartIcon && (
        <IconSpace>
          <StartIcon size={16} />
        </IconSpace>
      )}
      {children}
    </ButtonStyle>
  );
}

Button.defaultProps = {
  color: 'primary',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['outlined', 'contained']),
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'purple',
    'yellow',
  ]),
};
