import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const raw = env.VITE_DEV_SERVER_PORT ?? "8080";
  const n = Number.parseInt(raw, 10);
  const devServerPort = Number.isFinite(n) ? n : 8080;

  return {
    server: {
      host: "::",
      port: devServerPort,
    },
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
