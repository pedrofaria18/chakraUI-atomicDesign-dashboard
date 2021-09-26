import React from "react";

import { Text } from "@chakra-ui/react";

interface TitleNavProps {
  label: string;
  active: boolean;
}

export const TitleNav = ({ active, label }: TitleNavProps) => {
  return (
    <Text
      fontSize="xs"
      fontWeight="bold"
      color={active ? "gray.700" : "gray.400"}
      border={active ? "1px solid gray.200" : "0.5px solid gray.200"}
      lineHeight="base"
    >
      {label}
    </Text>
  );
};
