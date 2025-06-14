import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./app/Header.jsx";
import Footer from "./app/Footer.jsx";

// Function to set zoom level
const setZoom = (zoomLevel) => {
  document.body.style.zoom = `${zoomLevel}%`;
};

// Wrapper component to handle zoom
const ZoomWrapper = () => {
  useEffect(() => {
    setZoom(100);
  }, []);

  return (
    <>
      <Header />
      <App />
      <Footer />
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ZoomWrapper />
  </StrictMode>
);
