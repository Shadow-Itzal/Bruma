// =================
//  IMPORTACIONES
// =================

import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import styles from './Layout.module.css';

// =================
//  COMPONENTE LAYOUT
// =================

// Este componente envuelve TODA la app

function Layout() {

    return (
        <>
            <div className={styles.contenedorPadre}>
                {/* Header se mantiene fijo en todas las rutas */}
                <Header />

                {/* contenido principal */}
                <main className={styles.contenidoPrincipal}> 

                    {/* Outlet es un espacio reservado. Aqui React Router inyectara el componente de la ruta actual (Home, Productos,etc.) */}
                    <Outlet /> 

                </main>
            
                {/* Footer se mantiene fijo en todas las rutas */}
                <Footer />
            </div>
        </>
    );
    
}

export default Layout;