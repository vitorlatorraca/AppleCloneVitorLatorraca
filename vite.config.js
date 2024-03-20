import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/AppleCloneVitorLatorraca",
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-x9",
      project: "javascript-react"
    })
  ],
  build: {
    sourcemap: true
  }
})
