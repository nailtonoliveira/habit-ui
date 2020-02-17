import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function Container(props) {
  return <StyledContainer {...props} />;
}
