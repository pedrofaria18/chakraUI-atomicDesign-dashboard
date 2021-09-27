import React from "react";

import { Text } from "@chakra-ui/react";

interface BreadcrumbItemProps {
  label: string;
  currentPage: boolean;
}

export const BreadcrumbItem = ({
  currentPage,
  label,
}: BreadcrumbItemProps) => {
  return <Text
    fontSize="xs"
    fontWeight="regular"
    color={currentPage ? "gray.700" : "gray.400"}
  >{label}</Text>;
};
