import type { Config } from "tailwindcss";
import { luxartesPreset } from "./src/utils/theming/preset";

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [luxartesPreset],
  content: ["src/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
} satisfies Config;

export default config;
