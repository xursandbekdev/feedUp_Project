import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        port:"3000",
        // proxy: {
        //     "/api": {
        //         target: "http://feed-up-api.komiljonovdev.uz",
        //         changeOrigin: true,
                
        //         rewrite: (path) => path.replace(/^\/api/, ""),
        //     },
        // },
    },
});
