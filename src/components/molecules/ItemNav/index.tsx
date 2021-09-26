import React from "react";

import { Box } from "@chakra-ui/react";
import { IconNav } from "../../atoms/IconNav";
import { TitleNav } from "../../atoms/TitleNav";
import { IconType } from "react-icons";

interface ItemNavProps {
  active: boolean;
  icon: IconType;
  label: string;
  clicked: (label: string) => void;
}

export const ItemNav = ({ active, icon, label, clicked }: ItemNavProps) => {
  return (
    <Box
      w="220px"
      h="54"
      d="flex"
      p="12px 0 12px 16px"
      alignItems="center"
      bg={active ? "brand.0" : "transparent"}
      borderRadius="15px"
      borderWidth={active ? ".5px" : "none"}
      borderColor="gray.200"
      boxShadow={active ? "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)" : "none"}
      cursor="pointer"
      onClick={() => clicked(label)}
    >
      <IconNav active={active} icon={icon} />
      <TitleNav active={active} label={label} />
    </Box>
  );
};
