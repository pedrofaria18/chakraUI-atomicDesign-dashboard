import React from "react";

import { Text } from "@chakra-ui/react";

interface CountDataCardProps {
  isPlus: boolean;
  label: string;
}

export const CountDataCard = ({ isPlus, label }: CountDataCardProps) => {
  return (
    <Text
      fs="sm"
      color={isPlus ? "green.400" : "red.500"}
      border="0.5px"
      borderColor="gray.200"
    >
      {label}
    </Text>
  );
};
