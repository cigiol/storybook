import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "tailwindcss/tailwind.css";
import "../src/assets/styles/globals.css";
import { ThemeProvider } from "./components/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
