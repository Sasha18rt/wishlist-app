import { defineConfig, defaultConfig } from "@chakra-ui/react";
import { createSystem } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#eff6ff" },
          100: { value: "#dbeafe" },
          200: { value: "#bfdbfe" },
          300: { value: "#93c5fd" },
          400: { value: "#60a5fa" },
          500: { value: "#3b82f6" },
          600: { value: "#2563eb" },
          700: { value: "#1d4ed8" },
          800: { value: "#1e40af" },
          900: { value: "#1e3a8a" },
          950: { value: "#172554" },
        },
        success: {
          500: { value: "#22c55e" },
        },
        error: {
          500: { value: "#ef4444" },
        },
        background: {
          light: { value: "#f9fafb" },
          dark: { value: "#1f2937" },
        },
        text: {
          light: { value: "#111827" },
          dark: { value: "#f9fafb" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.50}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.200}" },
          subtle: { value: "{colors.brand.300}" },
          emphasized: { value: "{colors.brand.400}" },
          focusRing: { value: "{colors.brand.600}" },
        },
        background: {
          light: { value: "#f9fafb" },
          dark: { value: "#1f2937" },
        },
        text: {
          light: { value: "#111827" },
          dark: { value: "#f9fafb" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
export default system;
