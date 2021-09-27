import React from "react"

import { Box } from "@chakra-ui/react"

import { IconType } from "react-icons"

interface IconHeaderProps {
  icon: IconType
  mr?: boolean
}

export const IconHeader = ({icon, mr}: IconHeaderProps) => {
  return (
    <Box w="12px" h="12px" color="gray.500"  as={icon} mr={mr ? "18px" : "0px"} />
  )
}
