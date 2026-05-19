// =====================
// IMPORTACIONES
// =====================

import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; /* se usa para navegar entre paginas */
import ItemDetailContainer from "../components/productos/ItemDetailContainer"
import styles from "./Detalle.module.css";


// =====================
// COMPONENTE PRINCIPAL
// =====================


function Detalle() {
    const navigate = useNavigate();

    // Este efecto se ejecuta apenas carga el componente y "mueve" el scroll arriba en la pagina
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={styles.detalleMain}>
            <button 
                onClick={() => navigate(-1)} /* pide al navegador ir a una pagina mas atras */
                className={styles.botonVolver}
            >
                ← Volver al catálogo
            </button>

            <ItemDetailContainer />
        </main>
    );
}

export default Detalle;