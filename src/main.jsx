import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeContext from "./Context/ThemeContext/ThemeContext.jsx";
import ThemeProvider from "./Context/ThemeContext/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
