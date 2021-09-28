import React from "react";

import { Text } from "@chakra-ui/react";

interface TitleDataCardProps {
  label: string;
}

export const TitleDataCard = ({ label }: TitleDataCardProps) => {
  return (
    <Text
      fs="xs"
      color="gray.400"
      weight="bold"
      border="0.5px"
      borderColor="gray.200"
    >
      {label}
    </Text>
  );
};
