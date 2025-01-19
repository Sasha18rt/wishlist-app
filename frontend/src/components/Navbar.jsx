import { Button, Container, Flex, HStack, Heading } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import React from 'react';
import { FaPlus } from "react-icons/fa";
import ColorModeButton from "./ui/color-mode";

export const Navbar = () => {
  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{
          base: "column",
          sm: "row",
        }}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="to-r"
         gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip="text"
        >
           <Link to={"/"}>Product Store 🛒</Link>
        </Heading>

        <HStack spacing={4} alignItems="center">
          <Link to="/create">
            <Button
              size="md"
              variant="ghost"
              width="40px"
              height="40px"
            >
              <FaPlus />
            </Button>
          </Link>
          <ColorModeButton size="md" />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
