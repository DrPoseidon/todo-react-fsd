import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import ViteSvgLoader from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ViteSvgLoader()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@/app": path.resolve(process.cwd(), "src/1_app"),
      "@/pages": path.resolve(process.cwd(), "src/2_pages"),
      "@/widgets": path.resolve(process.cwd(), "src/3_widgets"),
      "@/features": path.resolve(process.cwd(), "src/4_features"),
      "@/entities": path.resolve(process.cwd(), "src/5_entities"),
      "@/shared": path.resolve(process.cwd(), "src/6_shared"),
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  base: ".",
});
