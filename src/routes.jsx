import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/components/appComponent";
import DocumentComponent from "./components/documentComponent.jsx";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/documentacao" element={<DocumentComponent />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;