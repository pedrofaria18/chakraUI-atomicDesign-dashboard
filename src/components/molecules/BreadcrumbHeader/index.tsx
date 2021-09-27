import { Box } from "@chakra-ui/layout";
import React from "react";

import { BreadcrumbItem } from "../../atoms/BreadcrumbItem";

export const BreadcrumbHeader = () => {
  return (
    <Box d="flex" mb="5px">
      <BreadcrumbItem currentPage={false} label="Pages" />
      <Box m="0 5px" fontSize="xs" fontWeight="regular">
        /
      </Box>
      <BreadcrumbItem currentPage={true} label="Dashboard" />
    </Box>
  );
};
