import { Container, Link, Stack, Text  } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { SimpleGrid } from "@chakra-ui/react"
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
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
       
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link href="/create">
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				
      </Stack>
    </Container>
  )
}
export default HomePage;