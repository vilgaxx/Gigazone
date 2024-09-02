import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Terms from "./Terms.jsx";
import Legal from "./Legal.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      
    </Router>
  </React.StrictMode>
);
