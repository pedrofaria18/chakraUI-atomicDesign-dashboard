import React from "react";

import { ChakraProvider, Box } from "@chakra-ui/react";

import { theme } from "./styles/theme";

import { MenuNav } from "./components/organisms/MenuNav";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="brand.1" w="100vw" h="100vh" textAlign="center" fontSize="xl">
      <MenuNav />
    </Box>
  </ChakraProvider>
);
