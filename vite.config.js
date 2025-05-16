import { defineConfig } from "vite";
import zaloMiniApp from "zmp-vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    base: "./",
    plugins: [zaloMiniApp(), react()],
    build: {
      assetsInlineLimit: 0,
      outDir: "dist",
    },
  });
};
