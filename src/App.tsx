import React from "react";

import { ChakraProvider, Box } from "@chakra-ui/react";

import { theme } from "./styles/theme";

import { NavMenu } from "./components/organisms/NavMenu";
import { Header } from "./components/organisms/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="brand.1" w="100vw" h="100vh" d="flex" flexDir="row">
      <NavMenu />
      <Box pr="22px" w="100%">
        <Header />
      </Box>
    </Box>
  </ChakraProvider>
);
