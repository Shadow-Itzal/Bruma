/* Aqui le decimos a la aplicacion: "Si el usuario escribe /productos, mostrale el componente Productos dentro de Layout" */

// =====================
// IMPORTACIONES
// =====================

// React Router
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { CarritoProvider } from "./context/CarritoContext";

// Paginas
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Nosotros from "./pages/Nosotros";
import Detalle from "./pages/Detalle";
import Admin from "./pages/Admin";

// Estilos
import "./App.css";

// =====================
// COMPONENTE PRINCIPAL
// =====================


function App() {
    //Este componente sera el "padre" de toda nuestra aplicación

    return (

        // El provider nos permite acceder al carrito desde cualquier parte de la app
        <CarritoProvider>


        <Routes> {/* Routes envuelve todas las rutas posibles de la web */}

            {/* Definimos una Ruta Padre que usa el componente Layout. 
            Al no tener un path de cierre, todas sus hijas heredarán el Header y Footer */}
            <Route path="/" element={<Layout />}>

                {/* 'index' significa que este es el componente por defecto al entrar a "/" */}
                <Route index element={<Home />} />

                <Route path="productos" element={<Productos />} />

                {/* El :id es un parámetro dinámico. 
                Nos permite usar un solo diseño para 12 productos distintos */}
                <Route path="producto/:id" element={<Detalle />} />

                <Route path="nosotros" element={<Nosotros />} />

                <Route path="carrito" element={<Carrito />} />

                <Route path="admin" element={<Admin />} />
                
            </Route>
        </Routes>

        </CarritoProvider>
    );
}

export default App;
