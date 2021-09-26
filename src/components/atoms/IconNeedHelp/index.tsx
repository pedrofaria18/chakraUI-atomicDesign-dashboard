import React from "react";

import { Box } from "@chakra-ui/react";
import { IoHelpCircle } from "react-icons/io5";


export const IconNeedHelp = () => {
  return (
    <Box
      w="35px"
      h="35px"
      bg="brand.0"
      borderRadius="12px"
      d="flex"
      alignItems="center"
      justifyContent="center"
      mb="21.5px"

      boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
    >
      <Box
        as={IoHelpCircle}
        w="24px"
        h="24px"
        color="teal.300"
      ></Box>
    </Box>
  );
};
