import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeContext from "./Context/ThemeContext/ThemeContext.jsx";
import ThemeProvider from "./Context/ThemeContext/ThemeProvider.jsx";
/* import { getAnalytics } from "firebase/analytics"; */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2hjcRB5nHu2qWoqffH_ELhS3BONE0QqI",
  authDomain: "ecommerce-doesneakers.firebaseapp.com",
  projectId: "ecommerce-doesneakers",
  storageBucket: "ecommerce-doesneakers.appspot.com",
  messagingSenderId: "778996462031",
  appId: "1:778996462031:web:de09c1786c6ebd675222ba",
  measurementId: "G-VGR8R5V0KB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/* const analytics = getAnalytics(app); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
