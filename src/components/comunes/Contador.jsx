// =====================
// IMPORTACIONES
// =====================

import { useState } from "react";
import styles from "./Contador.module.css";


// =====================
// COMPONENTE PRINCIPAL
// =====================

function Contador({ stock, inicial, alAgregar}) {
    const [cantidad, setCantidad] = useState(inicial);

    const sumar = () => cantidad < stock && setCantidad(cantidad + 1);
    const restar = () => cantidad > 1 && setCantidad(cantidad - 1);

    return (
        <div className={styles.contadorContenedor}>

            {/* botones de: sumar, restar y cantidad */}
            <div className={styles.contadorContenedor}>

                <button onClick={restar} className={styles.btnControl}>-</button>

                <span className={styles.numero}>{cantidad}</span>

                <button onClick={sumar} className={styles.btnControl}>+</button>
                
            </div>

            {/* boton de agregar al carrito */}
            <button 
                onClick={() => alAgregar(cantidad)} 
                className={styles.btnAgregar}>
                    Agregar al carrito
            </button>

        </div>

    );

}

export default Contador;