import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry:  resolve(__dirname, "index.ts"),
      name: "ViteButton",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, "index.ts"),
  //     formats: ["es", "cjs"],
  //     fileName: (ext) => `index.${ext}.js`,
  //   },
  //   rollupOptions: {
  //     external: [
  //       ...Object.keys(peerDependencies),
  //       ...Object.keys(dependencies),
  //     ],
  //     output: {
  //       preserveModules: true,
  //       exports: "named",
  //     },
  //   },

  //   target: "esnext",
  //   sourcemap: true,
  // },
});
