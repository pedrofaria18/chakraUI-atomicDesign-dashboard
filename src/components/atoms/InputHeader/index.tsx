import React from "react";

import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

import { IoSearch } from "react-icons/io5";

export const InputHeader = () => {
  return (
    <InputGroup w="199px" h="39.5px" bg="brand.0" mr="18px" borderColor="gray.200" borderRadius="12px">
      <InputLeftElement
        pointerEvents="none"
        children={<IoSearch color="gray.300" width="15px" height="15px" />}
      />
      <Input type="text" placeholder="Type here ..." focusBorderColor="teal.300" />
    </InputGroup>
  );
};
