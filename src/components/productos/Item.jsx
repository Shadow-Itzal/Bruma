/* Es la tarjeta individual */

// =====================
// IMPORTACIONES
// =====================

import { Link } from "react-router-dom";
import { useState } from "react";
import { usarCarrito } from "../../context/CarritoContext";
import styles from "./Item.module.css";


// =====================
// COMPONENTE PRINCIPAL
// =====================

function Item({ producto }) {

    const { agregarCarrito } = usarCarrito();

    const [botonTexto, setBotonTexto] = useState("Comprar")

    const manejarClick = () => {
        agregarCarrito(producto, 1);
        setBotonTexto("¡Agregado!"); /* feedback visual rapido */
        setTimeout(() => setBotonTexto("Comprar"), 2000); // vuelve a la normalidad a los 2 segundos
    };

    return (

        <article className={styles.card}>

            {/* imagen */}
            <img 
                src={producto.imagen_escenario} 
                alt={`Cuadro ${producto.nombre} en un escenario`} 
                className={styles.imagen} />

            {/* nombre */}
            <h3 className={styles.nombre}>
                {producto.nombre}
            </h3>

            {/* precio */}
            <p className={styles.precio}>
                $ {producto.precio.toLocaleString("es-AR")} {/* agrega el punto decimal, al detectar el pais */}
            </p>

            {/* botones */}
            <div className={styles.botones}>
                <Link to={`/producto/${producto.id}`} className={styles.detalles}>
                    Detalles
                </Link>
                <button className={styles.comprar} onClick={manejarClick}>
                    {botonTexto}
                </button>

            </div>

        </article>
    );
}

export default Item;