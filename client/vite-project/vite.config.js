import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allow external access
    port: 5173,
    strictPort: true,
    // Uncomment if you have Hot Module Replacement issues
    // hmr: {
    //   host: '172.18.166.113',
    //   clientPort: 5173
    // }
  },
});
