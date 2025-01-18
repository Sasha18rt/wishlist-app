import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import  ColorModeButton  from "./ui/color-mode"; // Імпорт кнопки для зміни теми
import React from 'react';

export const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text fontWeight={"bold"} fontSize={"lg"}>
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={4} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              Add Product
            </Button>
          </Link>
          {/* Додаємо кнопку зміни кольору */}
          <ColorModeButton />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
