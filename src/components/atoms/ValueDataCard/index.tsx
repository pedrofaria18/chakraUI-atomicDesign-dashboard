import React from "react";

import { Text } from "@chakra-ui/react";

interface ValueDataCardProps {
  label: string;
}

export const ValueDataCard = ({ label }: ValueDataCardProps) => {
  return (
    <Text
      size="lg"
      weight="bold"
      color="gray.700"
      mr="5px"
      lineHeight="150%"
    >
      {label}
    </Text>
  );
};

