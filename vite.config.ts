import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Avoid EBUSY crashes on Windows when media files are locked
      usePolling: true,
      interval: 400,
      ignored: ["**/public/media/**", "**/*.jpg", "**/*.png", "**/*.jpeg"],
    },
  },
});
