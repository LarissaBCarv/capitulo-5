import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        id: "/",
        name: "Capítulo 5",
        short_name: "Capítulo 5",
        description: "Uma história que continua sendo escrita.",

        theme_color: "#000000",
        background_color: "#000000",

        display: "standalone",
        orientation: "portrait",

        icons: [
          {
            src: "/images/eyes.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/eyes.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
