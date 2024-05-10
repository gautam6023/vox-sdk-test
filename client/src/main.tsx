import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { VoxProvider } from "vox-sdk";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VoxProvider
      config={{
        baseUrl: "http://localhost:8080",
      }}
    >
      <App />
    </VoxProvider>
  </React.StrictMode>
);
