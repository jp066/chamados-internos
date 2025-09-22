import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/appComponent";
import DocumentComponent from "./components/documentComponent.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

const AppRoutes = () => (
  <BrowserRouter>
    <DarkModeProvider>
      <LoginProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/documentacao" element={<DocumentComponent />} />
        </Routes>
      </LoginProvider>
    </DarkModeProvider>
  </BrowserRouter>
);

export default AppRoutes;
