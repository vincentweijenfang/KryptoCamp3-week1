import './Header.styl';
import React from "react";

import {
  extendTheme, // https://chakra-ui.com/docs/styled-system/features/color-mode
  ChakraProvider,
  useColorMode,
  useColorModeValue,
  Box,
  Icon,
  Button,
  Switch,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"

// https://react-icons.github.io/react-icons/
import { 
  BsFillSunFill,
  BsFillMoonFill,
} from "react-icons/bs";

function Header() {
  
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();

  // Chakra Color by Mode https://chakra-ui.com/docs/styled-system/features/color-mode#usecolormodevalue
  const headerColor = useColorModeValue('gray.800', 'gray.800');

  return pug`
    Box.header.py-4(bg=headerColor)
      .header-container.container-fluid.px-4
        .header-content.d-flex.justify-content-between.align-items-center
          .logo
            img(src="https://kryptocamp.tw/wp-content/uploads/2021/12/kryptocamp-logo-white.png")
          .d-flex.align-items-center
            FormControl
              FormLabel
                Icon(as=BsFillSunFill w=4 h=4 color="gray.100")
                Switch.mx-3(
                  colorScheme="black"
                  size="lg"
                  onChange=toggleColorMode
                  defaultChecked=true
                )
                Icon(as=BsFillMoonFill w=4 h=4 color="gray.600")
          //-
            Button(
              colorScheme="teal"
              fontWeight="300"
              onClick=toggleColorMode
              _focus={
                boxShadow: 'none',
              }
            )          
              |#{colorMode == "light" ? "Dark" : "Light"}
  `;
}

export default Header;

