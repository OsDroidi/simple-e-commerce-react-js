import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/main.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
