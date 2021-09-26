import React from "react";

import { Box } from "@chakra-ui/react";

import { ButtonNeedHelp } from "../../atoms/ButtonNeedHelp";
import { IconNeedHelp } from "../../atoms/IconNeedHelp";
import { SubtitleNeedHelp } from "../../atoms/SubtitleNeedHelp";
import { TitleNeedHelp } from "../../atoms/TitleNeedHelp";
import { BackgroundButton } from "../../atoms/BackgroundButton";

export const CardNeedHelp = () => {
  return (
    <Box
      w="218px"
      h="170px"
      p="16px"
      bg="teal.300"
      borderRadius="15px"
      mt="70px"
      d="flex"
      alignItems="center"
    >
      <BackgroundButton />

      <Box position="relative">
        <IconNeedHelp />
        <TitleNeedHelp />
        <SubtitleNeedHelp />
        <ButtonNeedHelp />
      </Box>
    </Box>
  );
};
