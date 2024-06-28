import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MetaMaskProvider } from "@metamask/sdk-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "shibadino",
          url: window.location.href,
        },
        infuraAPIKey: process.env.REACT_APP_METAMASK_KEY,
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>,
);

reportWebVitals();
