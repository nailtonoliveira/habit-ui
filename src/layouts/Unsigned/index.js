import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import logo from '../../assets/logo.png';

import { Background, Header, Root, Logo } from './styles';

export default function Unsigned({ children }) {
  return (
    <>
      <Background>
        <Root container direction="column">
          <Header>
            <Button>Go back home</Button>
          </Header>
          <Container maxWidth="sm" direction="column">
            <Box display="flex" flexGrow={1} justifyContent="center" py={4}>
              <Logo src={logo} alt="logo-icon" />
            </Box>
            {children}
          </Container>
        </Root>
      </Background>
    </>
  );
}
