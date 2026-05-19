/* Es el componente inteligente o contenedor. Su unico trabajo es buscar datos (el fetch) y mostrar un mensaje de "Cargando..." mientras espera */

/* Se usa "useState" para guardar datos y "useEffect" para disparar el fetch al cargar la pagina */

// =====================
// IMPORTACIONES
// =====================

import { useState, useEffect } from "react";
import ItemList from './ItemList';
import styles from './ItemListContainer.module.css'


// =====================
// COMPONENTE PRINCIPAL
// =====================

//agregamos la prop "soloDestacados"

function ItemListContainer({ mensaje, soloDestacados = false }) {
    
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        // simulamos una peticion al archivo JSON (fetch)
        fetch('/data/productos.json')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                // Logica de filtrado:
                // Si soloDestacados es true, cortamos el array a 6.
                // Si es false, usamos el array completo

                if (soloDestacados) {
                    setProductos(datos.slice(0, 6));
                } else {
                    // Si estamos en Home, solo muestra 6, si no todos
                setProductos(datos);
                }
                
            })

            .catch((error) => console.error("Error cargando productos:", error))
            .finally(() => setCargando(false));

    }, [soloDestacados]); // se ejecuta si cambia lo prop

    return (

        <section className={styles.seccion}>
            <h2 className={styles.titulo}>{mensaje}</h2>

            {/* le pasamos los productos al ItemList */}
            {cargando
                ? <p style={{textAlign: 'center'}}>Cargando obras de arte...</p>
                : <ItemList productos={productos} />
            }

        </section>
    );

}

export default ItemListContainer;