import React from 'react';
import { ChevronCircleLeft } from 'styled-icons/fa-solid';

import logo from '../../assets/logo.png';

import { Background, Header, Root, MButton, Logo, Container } from './styles';

export default function Unsigned({ children }) {
  return (
    <>
      <Background>
        <Root container direction="column">
          <Header>
            <MButton startIcon={ChevronCircleLeft}>Go back home</MButton>
          </Header>
          <Container direction="column">
            {/* <Box
              display="flex"
              flexGrow={1}
              justifyContent="center"
              py={4}
              mb={8}
            >
              <Logo src={logo} alt="logo-icon" />
            </Box> */}
            {children}
          </Container>
        </Root>
      </Background>
    </>
  );
}
