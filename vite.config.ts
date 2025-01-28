import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/memcrab-test-task",
  server: {
    allowedHosts: [".ngrok-free.app"],
  },
});
