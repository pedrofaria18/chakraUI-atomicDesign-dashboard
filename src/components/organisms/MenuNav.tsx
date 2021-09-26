import React, { useState } from "react";

import { Box } from "@chakra-ui/react";

import { ItemNav } from "../molecules/ItemNav";

import { IoCard, IoHome, IoPerson, IoStatsChart } from "react-icons/io5";
import { IconType } from "react-icons";

interface ItemsNavProps {
  icon: IconType;
  label: string;
}

export const MenuNav = () => {
  const itemsNav: ItemsNavProps[] = [
    {
      icon: IoHome,
      label: "Dashboard",
    },
    {
      icon: IoStatsChart,
      label: "Tables",
    },
    {
      icon: IoCard,
      label: "Billign",
    },
    {
      icon: IoPerson,
      label: "Profile",
    },
  ];

  const [nameItemActive, setNameItemActive] = useState(itemsNav[0].label);

  const handleItemNav = (labelItem: string) => {
    setNameItemActive(labelItem);
  }

  return (
    <Box>
      {itemsNav.map((item, index) => (
        <ItemNav key={index} active={nameItemActive === item.label} icon={item.icon} label={item.label} clicked={handleItemNav}  />
      ))}
    </Box>
  );
};
