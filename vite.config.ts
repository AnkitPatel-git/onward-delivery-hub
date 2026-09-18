import path from "path";
import { defineConfig, loadEnv, type ProxyOptions } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const raw = env.VITE_DEV_SERVER_PORT ?? "8080";
  const n = Number.parseInt(raw, 10);
  const devServerPort = Number.isFinite(n) ? n : 8080;

  const apiProxyTarget = (env.API_PROXY_TARGET || "http://localhost:3001").replace(
    /\/$/,
    "",
  );
  const websiteTrackingKey = (env.WEBSITE_TRACKING_KEY || "").trim();
  const trackingProxy: Record<string, ProxyOptions> = {
    "/api": {
      target: apiProxyTarget,
      changeOrigin: true,
      configure(proxy) {
        proxy.on("proxyReq", (proxyReq) => {
          if (websiteTrackingKey) {
            proxyReq.setHeader("x-website-tracking-key", websiteTrackingKey);
          }
        });
      },
    },
  };

  return {
    server: {
      host: "::",
      port: devServerPort,
      proxy: trackingProxy,
    },
    preview: {
      proxy: trackingProxy,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
