import React from "react"

import { Image } from "@chakra-ui/react"

import logo from "../../../assets/Logo.svg"

export const Logo = () => {
  return (
    <Image src={logo} alt="Logo dashboard" mb="27.5px"/>
  )
}
