import React from "react";

import { Box } from "@chakra-ui/react";

import {
  IoCart,
  IoDocumentText,
  IoGlobeOutline,
  IoWallet,
} from "react-icons/io5";
import { DataCard } from "../../molecules/DataCard";

export const SectionDataCard = () => {
  const dataCards = [
    {
      title: "Today's Money",
      value: "$53,000",
      count: "+55%",
      isPlus: true,
      icon: IoWallet,
    },
    {
      title: "Today's Users",
      value: "2,300",
      count: "+5%",
      isPlus: true,
      icon: IoGlobeOutline,
    },
    {
      title: "New Clients",
      value: "+3,052",
      count: "-14%",
      isPlus: false,
      icon: IoDocumentText,
    },
    {
      title: "Total Sales",
      value: "$173,000",
      count: "+8%",
      isPlus: true,
      icon: IoCart,
    },
  ];
  return (
    <Box w="100%" mt="30px" d="flex" justifyContent="space-between">
      {dataCards.map((dataCard, index) => (
        <DataCard
          key={index}
          count={dataCard.count}
          title={dataCard.title}
          icon={dataCard.icon}
          isPlus={dataCard.isPlus}
          value={dataCard.value}
        />
      ))}
    </Box>
  );
};
