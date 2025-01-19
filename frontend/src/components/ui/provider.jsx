'use client';

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes"; 
import theme from "../theme";

const Provider = ({ children }) => {
  return (
    <ChakraProvider value={theme}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </ChakraProvider>
  );
};

export default Provider;
