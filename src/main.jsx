import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TestProvider, TestContext } from "./context/TestContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

export { TestContext };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <TestProvider>
        <App />
      </TestProvider>
    </Router>
  </StrictMode>
);
