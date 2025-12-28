import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.jsx";
import { PlayerProvider } from "./context/PlayerContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayerProvider>
      <GoogleOAuthProvider clientId="1063920408034-bp4irutj5pgd3eodbmolubs75vmkqmv6.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider></PlayerProvider>
  </StrictMode>
);
