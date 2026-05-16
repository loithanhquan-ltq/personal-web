import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "personal-web";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? `/${repoName}/` : "/"
}));
