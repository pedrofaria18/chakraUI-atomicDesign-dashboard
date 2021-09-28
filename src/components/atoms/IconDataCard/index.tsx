import React from "react";

import { Box } from "@chakra-ui/react";

import { IconType } from "react-icons";

interface IconDataCardProps {
  icon: IconType;
}

export const IconDataCard = ({ icon }: IconDataCardProps) => {
  return (
    <Box
      w="45px"
      h="45px"
      bg="teal.300"
      borderRadius="12px"
      d="flex"
      alignItems="center"
      justifyContent="center"
      mr="12px"
      boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
    >
      <Box
        as={icon}
        w="22.5px"
        h="22.5px"
        color="brand.0"
      ></Box>
    </Box>
  );
};
