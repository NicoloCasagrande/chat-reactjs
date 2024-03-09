import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from 'vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/chat-reactjs/",
  build: {
    outDir: 'dist', // Specify the output directory for the production build
    assetsInlineLimit: 512 * 1024, // Adjust the inline limit for assets (optional)
  },
  plugins: [react(), commonjs() ],
});
