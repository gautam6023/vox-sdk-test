import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { VoxProvider } from "vox-sdk";
import axios from "axios";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VoxProvider
      config={{
        baseUrl: "http://localhost:8080",
        onAuthRefresh: async () => {
          const newToken = await axios.get("http://localhost:8080/token?refresh=true");
          console.log("Token expired");
          console.log(newToken);
          return { token: newToken.data.token, region: newToken.data.region };
        },
      }}
    >
      <App />
    </VoxProvider>
  </React.StrictMode>
);
