import React from 'react';
import styled, { css } from 'styled-components';

function getWidthString(span) {
  if (!span) return;

  let width = (span / 12) * 100;
  return css`
    width: ${width}%;
  `;
}

const StyledGridItem = styled.div`
  border: 1px solid white;
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

  @media only screen and (min-width: 480px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 768px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1024px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }

  @media only screen and (min-width: 1440px) {
    ${({ xl }) => xl && getWidthString(xl)};
  }
`;

export default function GridItem(props) {
  return <StyledGridItem {...props} />;
}
