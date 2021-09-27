import React from "react";

import { Box } from "@chakra-ui/react";

import { BreadcrumbHeader } from "../../molecules/BreadcrumbHeader";
import { UserAreaHeader } from "../../molecules/UserAreaHeader";

import { TitleCurrentPage } from "../../atoms/TitleCurrentPage";

export const Header = () => {
  return (
    <Box
      w="100%"
      d="flex"
      justifyContent="space-between"
      mt="22.5px"
      pl="17px"
      pr="25.5px"
    >
      <Box>
        <BreadcrumbHeader />
        <TitleCurrentPage label="Dashboard" />
      </Box>

      <UserAreaHeader />
    </Box>
  );
};
