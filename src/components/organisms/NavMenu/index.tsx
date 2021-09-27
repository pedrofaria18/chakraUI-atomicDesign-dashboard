import React, { useState } from "react";

import { Box } from "@chakra-ui/react";

import {
  IoBuild,
  IoCard,
  IoDocument,
  IoHome,
  IoPerson,
  IoRocketSharp,
  IoStatsChart,
} from "react-icons/io5";
import { IconType } from "react-icons";

import { ItemNav } from "../../molecules/ItemNav";
import { SubtitleMenuNav } from "../../atoms/SubtitleMenuNav";
import { Logo } from "../../atoms/Logo";
import { LineMenuNav } from "../../atoms/LineMenuNav";
import { CardNeedHelp } from "../../molecules/CardNeedHelp";

interface ItemsNavProps {
  icon: IconType;
  label: string;
}

export const NavMenu = () => {
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
      icon: IoBuild,
      label: "RTL",
    },
  ];

  const itemsNavAccount: ItemsNavProps[] = [
    {
      icon: IoPerson,
      label: "Profile",
    },
    {
      icon: IoDocument,
      label: "Sign In",
    },
    {
      icon: IoRocketSharp,
      label: "Sign Up",
    },
  ];

  const [nameItemActive, setNameItemActive] = useState(itemsNav[0].label);

  const handleItemNav = (labelItem: string) => {
    setNameItemActive(labelItem);
  };

  return (
    <Box
      maxW="246.5px"
      d="flex"
      flexDir="column"
      alignItems="center"
      pt="40px"
      pl="18px"
      mr="31px"
    >
      <Logo />

      <LineMenuNav />

      {itemsNav.map((item, index) => (
        <ItemNav
          key={index}
          active={nameItemActive === item.label}
          icon={item.icon}
          label={item.label}
          clicked={handleItemNav}
        />
      ))}

      <SubtitleMenuNav />

      {itemsNavAccount.map((item, index) => (
        <ItemNav
          key={index}
          active={nameItemActive === item.label}
          icon={item.icon}
          label={item.label}
          clicked={handleItemNav}
        />
      ))}

      <CardNeedHelp />
    </Box>
  );
};
