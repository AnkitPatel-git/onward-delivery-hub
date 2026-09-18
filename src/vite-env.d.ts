/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string;
  readonly VITE_DEV_SERVER_PORT?: string;
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_WEBSITE_TRACKING_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
