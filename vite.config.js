import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("zustand")) {
              return "vendor_zustand";
            }
            if (id.includes("aos")) {
              return "vendor_aos";
            }
            if (id.includes("react-router-dom")) {
              return "vendor_react_router";
            }
            if (id.includes("@emailjs/browser")) {
              return "vendor_emailjs";
            }
            if (id.includes("vanta")) {
              return "vendor_vanta";
            }
            if (id.includes("react-dom")) {
              return "vendor_react_dom";
            }

            return "vendor"; // all other package goes here
          }
        },
      },
    },
  },
});
