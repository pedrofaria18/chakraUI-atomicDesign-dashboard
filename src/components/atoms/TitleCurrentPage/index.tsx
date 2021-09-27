import React from "react";

import { Text } from "@chakra-ui/react";

interface TitleCurrentPageProps {
  label: string;
}

export const TitleCurrentPage = ({ label }: TitleCurrentPageProps) => {
  return <Text color="gray.700" fontSize="sm" fontWeight="bold" border="0.5px" borderColor="gray.200">{label}</Text>;
};
