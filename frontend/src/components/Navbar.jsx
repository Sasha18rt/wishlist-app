import { Button, Center, Container, Flex, Link, Heading, Stack } from '@chakra-ui/react';
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
  as="a" 
  href="/" 
  size="2xl"
  letterSpacing="tight"
  fontWeight="bold"
  textTransform="uppercase"
  textAlign="center"
  bgGradient="to-r"
  gradientFrom="cyan.400"
  gradientTo="blue.500"
  bgClip="text"
  _hover={{ textDecoration: "none", cursor: "pointer" }} // Забираємо стандартне підкреслення
>
  Product Store 🛒
</Heading>
        <Center >
  <Stack direction="horizontal" gap={50}>
    <Link  to="#1"
    _hover={{ textDecoration: "underline" }}>About</Link>
    <Link>1</Link>
    <Link>1</Link>

  </Stack>
</Center>
        <Stack  direction="row" >
          <Link to="/create">
            <Button
              size="md"
              
            >
              Create
            </Button>
          </Link>
          <Button variant="outline">Sign in</Button>
          <ColorModeButton size="md" />
        </Stack>
      </Flex>
    </Container>
  );
};

export default Navbar;
