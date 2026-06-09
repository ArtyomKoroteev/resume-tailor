import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    reactRouter(),
    babel({ plugins: ["babel-plugin-react-compiler"] }),
    tailwindcss(),
  ],
  server: {
    port: 8080,
  },
});
