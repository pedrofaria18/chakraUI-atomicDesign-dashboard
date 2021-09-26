import React from "react";

import { Box } from "@chakra-ui/react";
import { IconNav } from "../../atoms/IconNav";
import { TitleNav } from "../../atoms/TitleNav";

import { IoHome } from "react-icons/io5";

export const ItemNav = () => {
  return (
    <Box d="flex" pt="12px" pb="12px" pl="16px" gap="12px">
      <IconNav clicked={true} icon={IoHome} />
      <TitleNav clicked={true} label="Dashboard" />
    </Box>
  );
};
