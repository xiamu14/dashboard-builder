type ENV = "dev" | "alpha" | "production";

interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_API_URL: string;
  VITE_DEBUG_TOKEN: string;
  VITE_RUNTIME_ENV: ENV;
  VITE_SITE_URL: string;
}
