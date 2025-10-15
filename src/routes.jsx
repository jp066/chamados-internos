import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/appComponent";
import DocumentComponent from "./components/documentComponent.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import { ChartSimple } from "./components/charts/charts_simple.jsx";

const AppRoutes = () => (
  <BrowserRouter>
    <DarkModeProvider>
      <LoginProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/docs" element={<DocumentComponent />} />
          <Route path="/relatorio" element={<ChartSimple />} />
        </Routes>
      </LoginProvider>
    </DarkModeProvider>
  </BrowserRouter>
);

export default AppRoutes;
