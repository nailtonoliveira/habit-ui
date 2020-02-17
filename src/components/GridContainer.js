import React from 'react';
import styled from 'styled-components';

const StyledGridContainer = styled.div`
  &:after {
    content: '';
    clear: both;
    display: table;
  }
`;

export default function GridContainer(props) {
  return <StyledGridContainer {...props} />;
}
