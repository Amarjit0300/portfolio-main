import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import os from "os";

// Use all available CPU cores, minimum 8
const cpuCount = Math.max(os.cpus().length, 8);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/portfolio-main/" : "/",

  build: {
    // Use esbuild for faster minification (leverages multi-core via native binary)
    minify: "esbuild",

    // Target modern browsers — skip legacy transpilation overhead
    target: "esnext",

    // Parallelise Rollup file read/write with all available cores (min 8)
    rollupOptions: {
      maxParallelFileOps: cpuCount,
      output: {
        // Split heavy libraries into separate parallel-bundled chunks
        manualChunks(id) {
          if (id.includes("node_modules/three")) return "three";
          if (id.includes("node_modules/gsap")) return "gsap";
          // Keep react + react-dom together to avoid circular chunk warnings
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          )
            return "react-vendor";
          if (id.includes("node_modules/")) return "vendor";
        },
      },
    },

    // Only generate source maps in development
    sourcemap: mode !== "production",

    // Raise chunk size warning threshold (Three.js is inherently large)
    chunkSizeWarningLimit: 1600,
  },

  // Use esbuild for TypeScript transpilation (multi-threaded)
  esbuild: {
    target: "esnext",
  },
}));

