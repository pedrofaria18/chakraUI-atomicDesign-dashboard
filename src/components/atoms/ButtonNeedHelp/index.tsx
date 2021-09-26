import React from "react";

import { Button } from "@chakra-ui/react";

export const ButtonNeedHelp = () => {
  return (
    <Button
      w="186px"
      h="35px"
      bg="brand.0"
      color="gray.700"
      borderRadius="12px"
      _hover={{
        bg: "brand.0",
      }}
    >
      DOCUMENTATION
    </Button>
  );
};
