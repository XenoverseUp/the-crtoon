import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import injectReact from "vite-preset-react";

export default defineConfig({
  plugins: [injectReact(), svgr()],
});
