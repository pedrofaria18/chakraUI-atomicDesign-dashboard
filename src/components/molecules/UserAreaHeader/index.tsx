import React from "react";

import { Box } from "@chakra-ui/react";

import { IoSettingsSharp, IoNotifications, IoPerson } from "react-icons/io5";

import { InputHeader } from "../../atoms/InputHeader";
import { IconHeader } from "../../atoms/IconHeader/inde";
import { SubtitleHeader } from "../../atoms/SubtitleHeader";

export const UserAreaHeader = () => {
  return (
    <Box d="flex" alignItems="center">
      <InputHeader/>

      <Box d="flex" alignItems="center" mr="19px">
        <IconHeader icon={IoPerson} />
        <SubtitleHeader />
      </Box>

      <IconHeader icon={IoSettingsSharp} mr={true} />

      <IconHeader icon={IoNotifications} />
    </Box>
  );
};
