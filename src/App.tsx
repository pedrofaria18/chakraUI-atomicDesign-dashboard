import * as React from "react";

import { ChakraProvider, Box } from "@chakra-ui/react";

import { theme } from "./styles/theme";
import { ItemNav } from "./components/molecules/ItemNav";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <ItemNav />
    </Box>
  </ChakraProvider>
);
