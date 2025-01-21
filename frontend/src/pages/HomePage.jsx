import { Container, Link, Stack, Text  } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { SimpleGrid } from "@chakra-ui/react"
import { EmptyState } from "../components/ui/empty-state";
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
import { LuShoppingCart } from 'react-icons/lu';
export const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

useEffect(() => {
  fetchProducts(); 
}, [fetchProducts]);

console.log("products", products);

  return (
    <Container>
      <Stack>
      <Text 
					fontSize={"30"}
					fontWeight={"bold"}
					// bgGradient={"linear(to-r, cyan.400, blue.500)"}
					// bgClip={"text"}
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip="text"
					textAlign={"center"}
				>
					Current Products 🚀
				</Text>
        <SimpleGrid gap="20px"
					columns={{
						base: 1,
						md: 2,
						lg: 3,
            
					}}
					spacing={14}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>
        {products.length === 0 && (
        <EmptyState
        icon={<LuShoppingCart />}
        title="Your cart is empty"
        description={
          <>
            Explore our products and add items.{' '}
            <Link
              href="/create"
              colorPalette="teal"
              _hover={{ textDecoration: "underline" }}
            >
              Create a product 
            </Link>{' '}
            to your cart.
          </>
        }
      />
      
        )}
      </Stack>
    </Container>
  )
}
export default HomePage;