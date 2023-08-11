import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "tailwindcss/tailwind.css";
import '../src/assets/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
