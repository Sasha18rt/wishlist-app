import {
    Box,
    Button,
    Heading,
    Input,
    IconButton,
    Image,
    Text,
    Stack,
  } from "@chakra-ui/react";
  import { MdEdit, MdDelete } from "react-icons/md";
  import { useState } from "react";
  import toaster from "./ui/toaster";
  import {
    DialogRoot,
    DialogContent,
    DialogHeader,
    DialogBody,
    DialogFooter,
    DialogTrigger,
    DialogActionTrigger,
    DialogTitle,
  } from "./ui/dialog";
  import { useProductStore } from "../store/product";
  
  const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(null);
    const { deleteProduct, updateProduct } = useProductStore();
  
    const handleDeleteProduct = async (pid) => {
      const { success, message } = await deleteProduct(pid);
      toaster.create({
        title: success ? "Success" : "Error",
        description: message,
        type: success ? "success" : "error",
        meta: { closable: true },
      });
    };
  
    const handleUpdateProduct = async () => {
      const { success, message } = await updateProduct(product._id, updatedProduct);
      toaster.create({
        title: success ? "Success" : "Error",
        description: success ? "Product updated successfully!" : message,
        type: success ? "success" : "error",
        meta: { closable: true },
      });
      if (success) setUpdatedProduct(null); // Close dialog on success
    };
  
    return (
      <Box
        bg="bg.subtle"
        shadow="md"
        borderRadius="lg"
        transition="transform 0.2s"
        _hover={{ transform: "translateY(-4px)" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          objectFit="cover"
          height={48}
          width="100%"
        />
  
        <Box padding={4}>
          <Heading as="h3" size="md" marginBottom={2}>
            {product.name}
          </Heading>
          <Text fontSize="lg" fontWeight="bold" color="text.emphasized" marginBottom={4}>
            ${product.price}
          </Text>
  
          <Stack direction="row" spacing={3}>
            {/* Edit Button (Opens Dialog) */}
            <DialogRoot>
              <DialogTrigger asChild>
                <IconButton
                  onClick={() => setUpdatedProduct(product)}
                  aria-label="Edit Product"
                  variant="outline"
                >
                  <MdEdit />
                </IconButton>
              </DialogTrigger>
  
              {/* Dialog Content */}
              {updatedProduct && (
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Update Product</DialogTitle>
                  </DialogHeader>
                  <DialogBody pb="4">
                    <Stack spacing={4}>
                      <Input
                        placeholder="Product Name"
                        value={updatedProduct?.name || ""}
                        onChange={(e) =>
                          setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                        }
                      />
                      <Input
                        placeholder="Price"
                        type="number"
                        value={updatedProduct?.price || ""}
                        onChange={(e) =>
                          setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                        }
                      />
                      <Input
                        placeholder="Image URL"
                        value={updatedProduct?.image || ""}
                        onChange={(e) =>
                          setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                        }
                      />
                    </Stack>
                  </DialogBody>
                  <DialogFooter>
                    <DialogActionTrigger asChild>
                      <Button variant="outline" onClick={() => setUpdatedProduct(null)}>
                        Cancel
                      </Button>
                    </DialogActionTrigger>
                    <Button variant="solid" colorScheme="blue" onClick={handleUpdateProduct}>
                      Update
                    </Button>
                  </DialogFooter>
                </DialogContent>
              )}
            </DialogRoot>
  
            {/* Delete Button */}
            <IconButton
              onClick={() => handleDeleteProduct(product._id)}
              aria-label="Delete Product"
              colorScheme="red"
              variant="outline"
            >
              <MdDelete />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    );
  };
  
  export default ProductCard;
  