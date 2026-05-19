// ====================
// IMPORTACIONES
// ====================

import React from "react";
import ReactDOM from "react-dom/client";

// Router principal
import { BrowserRouter } from "react-router-dom";

// Estilos globales
import "./index.css";

// Componente principale
import App from "./App";

// ====================
// RENDERIZADO
// ====================

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        {/* BrowserRouter permite usar:
            - Link
            - Routes
            -Route */}

        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
