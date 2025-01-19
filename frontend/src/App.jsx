import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/toaster";
import  theme  from "./components/theme"

function App() {
  return (
    <Box minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
      <Navbar />
      <Toaster /> 
      <Routes theme={theme}>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;

