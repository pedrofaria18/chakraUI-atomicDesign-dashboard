import React from "react";

import { Box } from "@chakra-ui/layout";
import { TitleDataCard } from "../../atoms/TitleDataCard";
import { IconType } from "react-icons";
import { ValueDataCard } from "../../atoms/ValueDataCard";
import { CountDataCard } from "../../atoms/CountDataCard";
import { IconDataCard } from "../../atoms/IconDataCard";

interface DataCardProps {
  title: string;
  value: string;
  count: string;
  isPlus: boolean;
  icon: IconType;
}

export const DataCard = ({
  isPlus,
  title,
  value,
  count,
  icon,
}: DataCardProps) => {
  return (
    <Box
      w="382px"
      h="80px"
      p="0 19px"
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="15px"
      bg="brand.0"
      border="0.5px"
      borderColor="gray.200"
      boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
    >
      <Box>
        <TitleDataCard label={title} />
        <Box d="flex">
          <ValueDataCard label={value} />
          <CountDataCard isPlus={isPlus} label={count} />
        </Box>
      </Box>

      <IconDataCard icon={icon} />
    </Box>
  );
};
