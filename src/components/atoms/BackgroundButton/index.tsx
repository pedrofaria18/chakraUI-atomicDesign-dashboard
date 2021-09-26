import React from "react";

import { Image } from "@chakra-ui/react";

import background from "../../../assets/BackgroundButton.svg";

export const BackgroundButton = () => {
  return <Image src={background} alt="Background Button" position="absolute" />;
};
