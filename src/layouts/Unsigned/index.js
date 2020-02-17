import React from 'react';
import { ChevronCircleLeft } from 'styled-icons/fa-solid';

import Container from '../../components/Container';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';

import logo from '../../assets/logo.png';

import { Background, Header, Root, MButton, Logo } from './styles';

export default function Unsigned({ children }) {
  return (
    <>
      <Background>
        <Root container direction="column">
          <Header>
            <MButton startIcon={ChevronCircleLeft}>Go back home</MButton>
          </Header>
          {/* <Container> */}
          <GridContainer>
            <GridItem>2</GridItem>

            <GridItem xs={6} sm={1}>
              1
            </GridItem>

            <GridItem xs={6} sm={2}>
              2
            </GridItem>

            <GridItem xs={6} sm={1}>
              1
            </GridItem>

            <GridItem xs={6} sm={2}>
              2
            </GridItem>

            <GridItem xs={6} sm={1}>
              1
            </GridItem>

            <GridItem xs={6} sm={2}>
              2
            </GridItem>

            <GridItem xs={6} sm={1}>
              1
            </GridItem>
          </GridContainer>
          {/* <Box
              display="flex"
              flexGrow={1}
              justifyContent="center"
              py={4}
              mb={8}
            >
              <Logo src={logo} alt="logo-icon" />
            </Box> */}
          {/* {children} */}
          {/* </Container> */}
        </Root>
      </Background>
    </>
  );
}
