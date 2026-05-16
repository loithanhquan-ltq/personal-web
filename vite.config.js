import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const REPO_NAME = "personal-web";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || REPO_NAME;

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? `/${repoName}/` : "/"
}));
