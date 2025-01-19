import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product.js";
import toaster from "../components/ui/toaster";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    try {
      const { success, message } = await createProduct(newProduct);
  
      // Використання нового API тостера
      toaster.create({
        title: success ? "Success" : "Error",
        description: success
          ? "Product created successfully!"
          : message || "Failed to create product.",
        type: success ? "success" : "error",
        meta: {
          closable: true,
        },
      });
  
      if (success) {
        setNewProduct({ name: "", price: "", image: "" });
      }
    } catch (error) {
      console.error("Error in product creation:", error);
  
      // Використання нового API тостера для обробки помилки
      toaster.create({
        title: "Error",
        description: "An unexpected error occurred.",
        type: "error",
        meta: {
          closable: true,
        },
      });
    }
  };
  

  return (
    <Container maxWidth="xl">
      <VStack spacing={8}>
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          marginBottom={8}
          
        >
          Create New Product
        </Heading>

        <Box
          width="100%"
          bg="gray.50"
          _dark={{ bg: "gray.900" }}
          padding={6}
          rounded="lg"
          shadow="md"
        >
          <VStack spacing={4}>
          <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button
            
              onClick={handleAddProduct}
              width="100%"
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
