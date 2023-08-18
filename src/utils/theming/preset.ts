import type { Config } from "tailwindcss";
import { luxartesPlugin } from "./plugin.ts";

export const luxartesPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [luxartesPlugin],
} satisfies Config;
