import React from "react";

import { Box } from "@chakra-ui/react";

import { IconType } from "react-icons";

interface IconNavProps {
  icon: IconType;
  active: boolean;
}

export const IconNav = ({ active, icon }: IconNavProps) => {
  return (
    <Box
      w="30px"
      h="30px"
      bg={active ? "teal.300" : "brand.0"}
      borderRadius="12px"
      d="flex"
      alignItems="center"
      justifyContent="center"
      mr="12px"
      boxShadow={active ? "none" : "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"}
    >
      <Box
        as={icon}
        w="15px"
        h="15px"
        color={active ? "brand.0" : "teal.300"}
      ></Box>
    </Box>
  );
};
