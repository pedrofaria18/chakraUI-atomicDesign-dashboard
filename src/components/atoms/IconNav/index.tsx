import React from "react";

import { Box } from "@chakra-ui/react";

import { IconType } from "react-icons";

interface IconNavProps {
  icon: IconType;
  clicked: boolean;
}

export const IconNav = ({ clicked, icon }: IconNavProps) => {
  return (
    <Box
      w="30px"
      h="30px"
      bg={clicked ? "teal.300" : "brand.0"}
      borderRadius="12px"
      d="flex"
      alignItems="center"
      justifyContent="center"
    >
      {React.createElement(icon, {
        style: {
          color: clicked ? "#fff" : "#38b2ac",
          width: "15px",
          height: "15px",
        }
      })}
    </Box>
  );
};
