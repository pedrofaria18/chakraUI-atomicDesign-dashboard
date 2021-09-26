import React from "react";

import { Text } from "@chakra-ui/react";

interface TitleNavProps {
  label: string;
  clicked: boolean;
}

export const TitleNav = ({ clicked, label }: TitleNavProps) => {
  return (
    <Text
      fontSize="xs"
      color={clicked ? "gray.700" : "gray.400"}
      border={clicked ? "1px solid gray.200" : "0.5px solid gray.200"}
      lineHeight="base"
    >
      {label}
    </Text>
  );
};
