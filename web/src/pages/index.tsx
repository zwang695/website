import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Container } from "../components/Container";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";

const Index = () => (
  <Container height="100vh">
    <NavBar />
    <Wrapper>
      <Stack spacing={6}>
        <Heading as="h1" size="2xl">
          Hi! I'm Zach
        </Heading>
        <Box>
          <Heading></Heading>
        </Box>
      </Stack>
    </Wrapper>
  </Container>
);

export default Index;
